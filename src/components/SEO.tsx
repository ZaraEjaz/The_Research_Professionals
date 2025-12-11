import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ description }) => {
  return (
	<Helmet>
	  <meta name="description" content={description} />
	</Helmet>
  );
};

export default SEO;