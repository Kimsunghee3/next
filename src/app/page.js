import Image from 'next/image'
import Animation from '@/components/animation'

export default function Home() {
  return (
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Frontend Developer
            <br className="hidden lg:inline-block" /> KIM SUNGHEE
          </h1>
          <p className="mb-8 leading-relaxed">웹세상의 건축가, 사용자들의 편의를 고려한 아름다운 웹을 건설하는 개발자입니다. <br /> 레고를 조립하듯 차곡차곡 목표를 완성해나갑니다!</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">프로젝트 보러가기</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation/>
        </div>
      </div>
  )
}
