import { Helmet } from 'react-helmet-async';

const Title = ({ title = 'Chat App', description = 'Seamless Chat App' }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
