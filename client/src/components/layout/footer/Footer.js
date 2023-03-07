import React from 'react';
import {footerRoutes} from "../../../pages/import"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
{footerRoutes.map((page, index)=> {
  return(
    <Link to={page.path} key={index}>{page.linkLabel}</Link>
  )
})}

    </footer>
  )
}

export default Footer