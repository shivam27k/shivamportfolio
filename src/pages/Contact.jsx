import { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Fox from '../models/Fox'
import Loader from '../components/Loader'

import useAlert from '../hooks/useAlert'
import AlertComponent from '../components/AlertComponent'
import { socialLinks } from '../constants'

const Contact = () => {
	const formRef = useRef(null)
	const [form, setForm] = useState({ name: '', email: '', message: '' })
	const [isLoading, setIsLoading] = useState(false)
	const [currentAnimation, setCurrentAnimation] = useState('idle')
	const { alert, showAlert, hideAlert } = useAlert()

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}
	const handleFocus = () => setCurrentAnimation('walk')
	const handleBlur = () => setCurrentAnimation('idle')

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsLoading(true)
		setCurrentAnimation('hit')

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Shivam',
					from_email: form.email,
					to_email: 'shivamkumar027k@gmail.com',
					message: form.message,
				},
				import.meta.env.VITE_EMAILJS_PUIBLIC_KEY
			)
			.then(() => {
				// todo = to show success message
				// todo = to hide an alert
				showAlert({
					show: true,
					text: 'Message sent successfully!',
					type: 'success',
				})
				setForm({ email: '', name: '', message: '' })
			})
			.catch((err) => {
				showAlert({
					show: true,
					text: 'Message was not sent!',
					type: 'error',
				})
				console.error(err)
				// todo = to show error message
			})
			.finally(() => {
				setTimeout(() => {
					hideAlert()
					setCurrentAnimation('idle')
				}, 3000)

				setIsLoading(false)
			})
	}

	return (
		<section className="flex flex-col max-container">
			{/* <AlertComponent {...alert} /> */}
			<div className="mb-32">
				<h1 className="head-text">
					My <span className="blue-gradient_text">Socials</span>
				</h1>
				<div className="mt-5 flex flex-col gap-3 text-slate-500">
					<p>Contact me anywhere anytime you want!</p>
				</div>
				<div className="mt-16 flex flex-wrap gap-12">
					{socialLinks.map((social) => (
						<a
							href={social.link}
							key={social.name}
							target="_blank"
							className="block-container w-20 h-20"
						>
							<div className="btn-back rounded-xl" />
							<div className="btn-front rounded-xl flex justify-center items-center">
								<img
									src={social.icon}
									alt={social.name}
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
							<div className="hover-text  btn-back-black text-center rounded-md">
								<p className="text-white">{social.name}</p>
							</div>
						</a>
					))}
				</div>
			</div>
			<div className="relative flex flex-1 lg:flex-row flex-col gap-5">
				{alert?.show && <AlertComponent {...alert} />}
				<div className="flex-1 min-w-[50%] flex flex-col ">
					<h1 className="head-text">
						Get in <span className="blue-gradient_text">Touch</span>
					</h1>
					<div className="mt-5 flex flex-col gap-3 text-slate-500">
						<p>Write me an email</p>
					</div>
					<form
						className="w-full flex flex-col gap-7 mt-5"
						onSubmit={handleSubmit}
						ref={formRef}
					>
						<label className="text-black-500 font-semibold">
							Name
							<input
								type="text"
								name="name"
								className="input"
								placeholder="John Doe"
								required
								value={form.name}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<label className="text-black-500 font-semibold">
							Email
							<input
								type="email"
								name="email"
								className="input"
								placeholder="johm@gmail.com"
								required
								value={form.email}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<label className="text-black-500 font-semibold">
							Your Message
							<textarea
								name="message"
								className="textarea"
								rows={4}
								placeholder="Let me know how I can help you!"
								required
								value={form.message}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<button
							type="submit"
							className="btn"
							disabled={isLoading}
							onFocus={handleFocus}
							onBlur={handleBlur}
						>
							{isLoading ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				</div>
				<div className="w-full lg:h-auto md:h-[550px] h-[350px]">
					<Canvas
						camera={{
							near: 0.1,
							far: 1000,
						}}
						frameloop="always"
					>
						<directionalLight intensity={2} position={[0, 0, 1]} />
						<ambientLight intensity={0.2} />
						<Suspense fallback={<Loader />}>
							<Fox
								position={[0.5, 0.35, 0]}
								rotation={[12.6, -0.6, 0]}
								scale={[0.6, 0.6, 0.6]}
								currentAnimation={currentAnimation}
							/>
						</Suspense>
					</Canvas>
				</div>
			</div>
		</section>
		// <div>jio</div>
	)
}

export default Contact
