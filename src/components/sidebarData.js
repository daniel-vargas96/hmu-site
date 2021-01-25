import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    class: 'footer-links'
  },
  {
    title: 'Sales',
    path: '/sales',
    icon: <FaIcons.FaMoneyBillAlt />,
    cName: 'nav-text',
    class: 'footer-links'
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: <IoIcons.IoMdSchool />,
    cName: 'nav-text',
    class: 'footer-links'
  },
  {
    title: 'Services',
    path: '/services',
    icon: <FaIcons.FaHelicopter />,
    cName: 'nav-text',
    class: 'footer-links'
  },
  {
    title: 'Photos & Videos',
    path: '/photos-videos',
    icon: <IoIcons.IoMdPhotos />,
    cName: 'nav-text',
    class: 'footer-links'
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
    class: 'footer-links'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiIcons.AiFillContacts />,
    cName: 'nav-text',
    class: 'footer-links'
  }
]
