import ContentLoader from 'react-content-loader';

export const LocationSkeleton = props => {
  return (
    <ContentLoader
      // height={200}
      width={400}
      // viewBox='0 0 400 200'
      backgroundColor='rgba(256,256,256, .1)'
      foregroundColor='rgba(4,4,4, .1)'
      {...props}
    >
      <rect x='15' y='15' rx='4' ry='4' width='130' height='7' />
      <rect x='155' y='15' rx='3' ry='3' width='130' height='7' />
      <rect x='295' y='15' rx='3' ry='3' width='90' height='7' />
      <rect x='15' y='50' rx='3' ry='3' width='90' height='7' />
      <rect x='115' y='50' rx='3' ry='3' width='60' height='7' />
      <rect x='185' y='50' rx='3' ry='3' width='200' height='7' />
      <rect x='15' y='90' rx='3' ry='3' width='130' height='7' />
      <rect x='160' y='90' rx='3' ry='3' width='120' height='7' />
      <rect x='290' y='90' rx='3' ry='3' width='95' height='7' />
      <rect x='15' y='130' rx='3' ry='3' width='130' height='7' />
      <rect x='160' y='130' rx='3' ry='3' width='225' height='7' />
    </ContentLoader>
  );
};

export const ResultSkeleton = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox='0 0 400 160'
    backgroundColor='rgba(256,256,256, .1)'
    foregroundColor='rgba(4,4,4, .1)'
    {...props}
  >
    <rect x='28' y='84' rx='3' ry='3' width='235' height='25' />
    <circle cx='307' cy='103' r='27' />
    <rect x='46' y='118' rx='3' ry='3' width='178' height='7' />
  </ContentLoader>
);
