import { Helmet } from 'react-helmet-async'

const PageTitle = ({ title }: { title: string }) => {
  const defaultTitle = 'Experience the dramatic difference between traditional CPA workflows and AI-powered automation'
  return (
    <Helmet>
      <title>{title ? title + ' | ' + defaultTitle : defaultTitle}</title>
    </Helmet>
  )
}

export default PageTitle