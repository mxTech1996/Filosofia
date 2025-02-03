"use client";
import { pageName } from "@/data";
import axios from "axios";
import { useState, useEffect } from "react";

const url = `https://cms.mxtechconsulting.com/api/website/${pageName}/`;
const token = "069c07b020945e19690b026f15a9605f9cc84fa0";
const initialState ={
    "name": "Filosofia",
    "url": "http://w.w.w.terra.com",
    "telephone": "5561653705",
    "email": "info@ejemplo.com",
    "address": "AV RICARDO MARGAIN ZOZAYA 575, S 100 ED C NA 0, SANTA ENGRACIA, SAN PEDRO GARZA GARCIA, NUEVO LEON, CP 66267",
    "description": "We offer a wide range of practical courses and interactive workshops to teach you how to handle common legal procedures, from business registration to contract management and preparing notarized documents.",
    "subtitle": "Learn, manage, and succeed,Courses and services to simplify your legal procedures",
    "image_hero": "https://cms-webserver-statics.s3.amazonaws.com/media/websites/filo1_.jpg",
    "image_hero2": "https://cms-webserver-statics.s3.amazonaws.com/media/websites/filo_2.jpg",
    "iconImage": "https://cms-webserver-statics.s3.amazonaws.com/media/websites/filosofia-en-talento-sa-de-cv-high-resolution-logo.png",
    "info": [
        {
            "title": "Transparency",
            "description": "We offer honest and detailed information, ensuring users understand every step of legal processes."
        },
        {
            "title": "Accessibility",
            "description": "Committed to providing clear and easy-to,understand legal resources and services for everyone, regardless of their experience level."
        },
        {
            "title": "Empowerment",
            "description": "Empowerment, Promoting legal independence by helping users acquire the knowledge and skills to manage their own procedures."
        }
    ],
    "services": [
        {
            "title": "Online courses on legal procedures",
            "description": "Educational programs that provide step-by-step guidance on common legal processes, such as business registrations, employment contracts, or tax filings.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/filo_2_.jpg"
        },
        {
            "title": "Personalized consultations",
            "description": "One-on-one sessions with legal experts to address specific questions and receive tailored guidance on procedures and documentation.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/filo._3.jpg"
        },
        {
            "title": "Document review and preparation",
            "description": "A service to review and draft essential documents like contracts, forms, legal applications, and more.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/filo_4_.jpg"
        },
        {
            "title": "Downloadable guides and templates",
            "description": "Access to practical resources, including customizable legal templates, checklists, and detailed tutorials.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/filo_4.jpg"
        },
        {
            "title": "Real-time online assistance",
            "description": "Live support through chat or video calls to help complete procedures efficiently and error-free.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/filo_5.jpg"
        }
    ],
    "references": [
        {
            "name": "Jaime Rodriguez",
            "description": "A client stated, attorneys were professional and attentive,The app made it easy to track my case status and communicate with my legal team, providing peace of mind throughout the process.",
            "rating": 5,
            "image": null
        },
        {
            "name": "Ana dominguez",
            "description": "Their platform guided me through each step, and the customer support was responsive to my questions.",
            "rating": 5,
            "image": null
        },
        {
            "name": "Mauricio Campuzano",
            "description": "Provided me with the necessary legal documents quickly, the membership model is cost-effective, and having access to licensed attorneys for consultations was invaluable.",
            "rating": 5,
            "image": null
        },
        {
            "name": "Adriana Gales",
            "description": "A small business owner noted, LegalShield's Small Business Legal Essentials plan was perfect for my needs,The ability to have documents reviewed and access to legal advice has been a game-changer for my operations.",
            "rating": 5,
            "image": null
        }
    ],
    "products": [
        {
            "id": 492,
            "name": "Legal Templates Package",
            "category": {
                "id": 1,
                "name": "Courses",
                "description": "Courses of laboratory"
            },
            "description": "The Legal Templates Package is a collection of pre-designed and customizable documents created to simplify the preparation of common legal procedures,These templates are tailored to local regulations and organized into specific categories to cover a wide range of legal and business needs.",
            "price": "899.99",
            "stock": 100,
            "content": "Variety of Documents, Customizable Design, Detailed Instructions,Each template comes with a brief guide offering step-by-step instructions on how to complete and customize it properly, Up-to-Date Legal Compliance,Instant Access, Cost-Effective and Practical, Additional Support,Includes the option to request a professional review of the documents by an expert, with preferential rates for package users.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/filo_6.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 493,
            "name": "Step-by-Step Practical Guides",
            "category": null,
            "description": "The Step-by-Step Practical Guides\"are resources designed to provide clear, detailed instructions on how to carry out specific legal procedures,These guides are structured to ensure easy understanding and execution, even for individuals with no prior legal experience.",
            "price": "599.99",
            "stock": 100,
            "content": "Detailed Format,Divided into clear, organized steps, covering everything from initial preparation to completing the procedure,The guides cover various legal topics, such as,How to register a business or company,Trademark and patent application processes,Accessible Format,User-Friendly Instructions,Written in simple, easy-to-understand language, avoiding complex legal jargon.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/filo_7_.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 499,
            "name": "Courses and Support Services for Legal Procedures",
            "category": {
                "id": 1,
                "name": "Courses",
                "description": "Courses of laboratory"
            },
            "description": "Courses and Support Services for Legal Procedures provide individuals and businesses with the knowledge, resources, and guidance necessary to navigate legal processes effectively This product combines educational programs with hands-on support to streamline legal tasks ensuring compliance and accuracy.",
            "price": "699.99",
            "stock": 100,
            "content": "Educational Courses, Expert Support Services, Interactive Resources, Online Accessibility, and Compliance Assurance.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/filo_12.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 498,
            "name": "Certifications in Legal Topics",
            "category": {
                "id": 1,
                "name": "Courses",
                "description": "Courses of laboratory"
            },
            "description": "These certifications validate their knowledge and skills, equipping them with the tools needed to apply legal principles in real-world scenarios, Ideal for professionals, business owners, and individuals seeking to expand their expertise in legal matters.",
            "price": "899.99",
            "stock": 100,
            "content": "Comprehensive Curriculum covers a variety of legal topics, including Contract law basics. Intellectual property rights, Corporate and business law, and Expert Instruction,Accreditation and Recognition, Certified by reputable institutions, law schools, or bar associations,Recognized by industry professionals and often carries Continuing Legal Education.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/filo_11.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 497,
            "name": "Automated Solutions for Legal Procedures",
            "category": {
                "id": 1,
                "name": "Courses",
                "description": "Courses of laboratory"
            },
            "description": "Automated Solutions for Legal Procedures,are digital tools designed to simplify and expedite the completion of common legal procedures,These solutions allow users to generate documents, fill out forms, and manage legal processes quickly and accurately, without the need for advanced technical knowledge.",
            "price": "999.99",
            "stock": 100,
            "content": "Automated Document Generation,Users can generate personalized legal documents ,Intuitive Interface, Compatibility with Multiple Legal Procedures, Business registrations,Tax filings and tax forms, Automatic Updates According to Regulations, Data Security,The platform uses encryption and data protection technologies to ensure that user information is fully secure during the document creation and submission process,Real-Time Support, Accessible from Any Device.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/filo10.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 496,
            "name": "Interactive Workshops",
            "category": {
                "id": 1,
                "name": "Courses",
                "description": "Courses of laboratory"
            },
            "description": "Interactive Workshops, are intensive, hands-on sessions designed to teach practical legal skills and provide real-world applications,These workshops are ideal for individuals and businesses looking to gain in-depth knowledge of specific legal topics and improve their ability to handle legal tasks effectively.",
            "price": "699.99",
            "stock": 100,
            "content": "Engaging and Practical Format,Focus on Key Legal Skills,Topics cover essential legal skills, such as contract negotiation, drafting legal documents, understanding intellectual property laws, and navigating tax obligations,Expert-Led Sessions, Small Group Size, Hands-On Learning, Post-Workshop Materials, Flexible Scheduling.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/filo_9_.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 495,
            "name": "Personalized Hourly Consultations",
            "category": {
                "id": 1,
                "name": "Courses",
                "description": "Courses of laboratory"
            },
            "description": "Personalized Hourly Consultations are one-on-one sessions with a legal expert, designed to address specific questions, provide guidance on legal procedures, and offer tailored solutions for each client’s needs,This service is ideal for those seeking direct and detailed attention within a short timeframe.",
            "price": "799.99",
            "stock": 100,
            "content": "Personalized Attention, Flexible Duration, Expert Availability, Virtual or In-Person Options, Guaranteed Confidentiality, Supplementary Support,After the session, clients may receive additional materials, such as guides, templates, or session summaries,Easy and Quick Booking,The service can be booked online with flexible schedules to fit the client’s availability.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/filo_9.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 494,
            "name": "Monthly Memberships",
            "category": {
                "id": 1,
                "name": "Courses",
                "description": "Courses of laboratory"
            },
            "description": "The \"Monthly Memberships\" offer ongoing access to a comprehensive range of legal resources, services, and exclusive benefits,Designed for individuals and businesses, these memberships provide an affordable and flexible way to simplify legal processes and stay informed on relevant updates.",
            "price": "1399.99",
            "stock": 100,
            "content": "Unlimited Access, Members can access a library of courses, practical guides, templates, and resources without restrictions,Includes new resources added monthly,Personalized Legal Support, Priority access to consultations with legal experts,Discounts on document review and additional services, Exclusive Webinars and Workshops:,Monthly live sessions with industry professionals covering trending legal topics and practical advice,Recordings available for members to watch at their convenience.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/filo_8.jpg",
            "image2": null,
            "image3": null
        }
    ],
    "categories": []
}
export const useInformation = () => {
  const [dataSite, setDataSite] = useState(initialState);

  const getSiteInfo = async () => {
  };
  useEffect(() => {
  }, []);

  return { dataSite };
};
