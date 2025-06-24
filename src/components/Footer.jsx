import React from "react";
import footerLogoImg from "../assets/footer-logo.png";
import { Link, NavLink } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";
const Footer = () => {
	return (
		<div className="footer bg-gradient-to-br from-c5026a3 via-c351574 to-c2a115b md:pt-24 px-4 pt-16">
			<div className="container max-w-7xl mx-auto">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-24 text-cf6f2ff/60 pb-10 md:pb-18 border-b border-cf6f2ff/15">
					<div>
						<img src={footerLogoImg} alt="Footer Logo" />
						<p className="mt-8 text-lg">
							We provide smart, secure, and scalable solutions to help your business grow with confidence. simply &
							effectively.
						</p>
					</div>
					<div>
						<h3 className="text-white font-bold text-lg mb-8">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<NavLink to="/" className="hover:text-cf6f2ff">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/login" className="hover:text-cf6f2ff">
									Login
								</NavLink>
							</li>
							<li>
								<NavLink to="/register" className="hover:text-cf6f2ff">
									Register
								</NavLink>
							</li>
							<li>
								<NavLink to="/forget-password" className="hover:text-cf6f2ff">
									Reset Password
								</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-white font-bold text-lg mb-8">Help & Support</h3>
						<ul className="space-y-2">
							<li>
								<NavLink className="hover:text-cf6f2ff" to="/terms-conditions">
									Terms and Conditions
								</NavLink>
							</li>
							<li>
								<NavLink className="hover:text-cf6f2ff" to="/privacy-policy">
									Privacy Policy
								</NavLink>
							</li>
							<li>
								<NavLink className="hover:text-cf6f2ff" to="/404">
									Help Center
								</NavLink>
							</li>
							<li>
								<NavLink className="hover:text-cf6f2ff" to="/404">
									Report a Problem
								</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-white font-bold text-lg mb-8">Get in Touch</h3>
						<ul className="space-y-2">
							<li>+880 1558 953165</li>
							<li>contact@subbloom.com</li>
							<li>Mirpur 10, Dhaka</li>
						</ul>
					</div>
				</div>

				<div className="py-4 md:py-8 text-center flex flex-col gap-5 sm:flex-row justify-between items-center w-full">
					<p className="text-white/70 text-sm">All Rights Reserved. &copy; 2025 SubBloom</p>
					<ul className="flex gap-3 sm:gap-6 flex-wrap">
						<li className="bg-[#0090ff] p-2 rounded-full text-white">
							<Link to="https://www.facebook.com/xoss.arif" target="_blank">
								<FaFacebookF size={15} />
							</Link>
						</li>
						<li className="bg-black p-2 rounded-full text-white">
							<Link to="https://x.com/xoss_arif" target="_blank">
								<FaXTwitter size={15} />
							</Link>
						</li>
						<li className="bg-[#2489BE] p-2 rounded-full text-white">
							<Link to="https://www.linkedin.com/in/arif128551/" target="_blank">
								<FaLinkedinIn size={15} />
							</Link>
						</li>
						<li className="bg-[#FF0000] p-2 rounded-full text-white">
							<Link to="https://www.youtube.com/@xossarif" target="_blank">
								<FaYoutube size={15} />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
