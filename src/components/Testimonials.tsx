import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
	{
		name: "Ryan Bowman",
		avatar: "./images/evaluations/agc.webp",
		project: "Amateur Golf Challenge",
		position: "CEO Amateur Golf Challenge PTY LTD",
		comment:
			"Hey Team, I just wanted to say a big thanks to all of you for getting the new app live.The response has been amazing!!!! Everyone I have ever spoken to has said the app is incredible - and they don’t mean the concept, they mean the form and function. I have worked with many developers and designers over the last 20 years - you guys are by far the best and it’s a to work with you all.Thanks for everything you have done and brought to this business.We could not have done pleasure it without you. 🙌🏻",
	},
	{
		name: "Raniel Almeida",
		avatar: "./images/evaluations/raniel.webp",
		project: "Orígeo CRM - Globant Brazil",
		position: "Project Manager",
		comment:
			"Thank you for the partnership and the excellent work on the projects! With your dedication and expertise, we were able to positively turn the situation around with Orígeo. I wish you great success in your new challenges, and may this new journey be filled with achievements!",
	},
	{
		name: "Felipe Taveira",
		avatar: "./images/evaluations/felipe.webp",
		project: "Casacor",
		position: "Product Management ",
		comment:
			"🚀 It has been a great experience working alongside Maicon on the Casacor Project! His professionalism, dedication, and expertise truly made a difference in delivering the project successfully. He is an exceptional professional, always committed to quality and efficiency. It was a pleasure collaborating with him, and I look forward to working together again in the future! 👏 Thanks, Maicon, for your outstanding work!",
	},
	{
		name: "Mateus",
		avatar: "./images/evaluations/mateus.webp",
		project: "Amateur Golf Challenge",
		position: "Lead Developer at Amateur Golf Challenge",
		comment:
			"Maicon is working with me for a very long time and in many projects. Here on AGC, he had a substantial presence on the app development, which was a completely rebuild from the older version. We are very happy to have had him in this project, the result was amazing!",
	},
	// {
	// 	name: "Leandro",
	// 	avatar: "./images/evaluations/leandro.webp",
	// 	project: "",
	// 	position: "",
	// 	comment: "",
	// },
	{
		name: "Marcio Toledo",
		avatar: "./images/evaluations/marcio.webp",
		project: "Amateur Golf Challenge",
		position: "Designer & Digital Strategist",
		comment:
			"Maicon was essential in developing the mobile app for one of our clients, ensuring a faithful implementation of the design and a seamless user experience. With his expertise in React Native and backend integration, he transformed our interfaces into a highly functional and intuitive application. Beyond his technical skills, his clear communication and proactivity made the process more efficient and agile. Without a doubt, he is a committed and highly qualified professional for mobile projects!",
	},
	{
		name: "Massato Kanno",
		avatar: "./images/evaluations/massato.webp",
		project: "Sumitomo Chemical - Globant Brazil",
		position: "Software Designer",
		comment:
			"Your team's commitment to delivering exceptional work has once again shone brightly through your interaction with the client. Your ability to innovate and consistently exceed expectations is truly commendable. Keep harnessing your curiosity and creativity to drive innovation and elevate our approach.",
	},
];

const Testimonials = () => {
	return (
		<>
			<Swiper
				loop
				spaceBetween={20}
				slidesPerView={1}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				keyboard={{ enabled: true }}
				pagination={{
					clickable: true,
					el: ".swiper-pagination",
					dynamicBullets: true,
				}}
				modules={[Navigation, Pagination, Autoplay]}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
			>
				{testimonials.map((testimonial, index) => (
					<SwiperSlide key={index.toString()} className="!flex !h-auto">
						<div className="p-5 md:mx-15 border border-gray-200 dark:border-gray-600 rounded-xl bg-background-card dark:bg-background-card-dark">
							<div className="flex items-center gap-4 justify-center">
								<img
									src={testimonial.avatar}
									alt="avatar"
									className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full"
									loading="lazy"
								/>

								<div className="">
									<h3 className="mb-1 text-xl text-gray-900 dark:text-white font-bold">
										{testimonial.name}
									</h3>

									<p className="mb-2 text-xs leading-tight">
										Project: {testimonial.project}
										<br />
										Position: {testimonial.position}
									</p>

									<p className="text-xs hidden md:block">
										<q>{testimonial.comment}</q>
									</p>
								</div>
							</div>

							<p className="text-xs md:hidden pt-4">
								<q>{testimonial.comment}</q>
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="swiper-pagination bottom-0" />
			<div className="swiper-button-prev text-primary !left-[-5px] !md:left-0" />
			<div className="swiper-button-next text-primary !right-[-5px] !md:right-0" />
		</>
	);
};

export default Testimonials;
