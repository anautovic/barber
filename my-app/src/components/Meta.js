import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Bienvenu à l'institut patchouli",
  description: 'Nous vendons de',
  keywords: 'Lait de beauté, buy electronics, cheap electroincs',
}

export default Meta