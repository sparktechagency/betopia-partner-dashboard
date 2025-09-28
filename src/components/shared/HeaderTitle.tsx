import Title from 'antd/es/typography/Title'

export default function HeaderTitle({title,subtitle}:{title:string,subtitle?:string}) {
  return (
    <div className=''>
       <Title level={3} className=" !font-semibold !my-0">
              {title} <span className="text-orange-500">{subtitle}</span>
            </Title>
    </div>
  )
}
