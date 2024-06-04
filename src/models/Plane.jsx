import React, { useEffect, useRef, useState } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Plane = ({ isRotating, scale, position, ...props }) => {
	const ref = useRef()
	const { scene, animations } = useGLTF(planeScene)
	const { actions } = useAnimations(animations, ref)
	const [verticalPosition, setVerticalPosition] = useState(position[1])
	const [time, setTime] = useState(0)
	const [isReturning, setIsReturning] = useState(false)

	useEffect(() => {
		if (isRotating) {
			actions['Take 001'].play()
			setIsReturning(false)
		} else {
			setIsReturning(true)
		}
	}, [actions, isRotating])

	useFrame((state, delta) => {
		if (isReturning) {
			setTime((prevTime) => prevTime + delta)
			const amplitude = verticalPosition - position[1]
			const speed = 2
			const newY = position[1] + amplitude * Math.sin(speed * time)
			setVerticalPosition(newY)

			ref.current.position.y = newY

			const tiltAngle = 0.1 * Math.cos(speed * time)
			ref.current.rotation.x = tiltAngle

			if (newY <= position[1]) {
				setIsReturning(false)
				setVerticalPosition(position[1])
				ref.current.position.y = position[1]
				ref.current.rotation.x = 0
				actions['Take 001'].stop()
			}
		} else if (isRotating) {
			setTime((prevTime) => prevTime + delta)
			const amplitude = 1.5
			const speed = 2
			const newY = position[1] + amplitude * Math.sin(speed * time)
			setVerticalPosition(newY)

			ref.current.position.y = newY

			const tiltAngle = 0.1 * Math.cos(speed * time)
			ref.current.rotation.x = tiltAngle
		}
	})

	return (
		<mesh scale={scale} position={position} {...props} ref={ref}>
			<primitive object={scene} />
		</mesh>
	)
}

export default Plane
