import type React from "react"

type GradientCardProps = React.PropsWithChildren<{
  className?: string
  showBackground?: boolean
}>

const Container: React.FC<GradientCardProps> = ({ children, className = "", showBackground = true }) => {
  return (
	<div className="">
	  <div
		className={`relative w-full rounded-[24px] bg-[#E7F2F5] backdrop-blur-3xl overflow-hidden flex-shrink-0 ${className}`}
	  >
		{showBackground && (
		  <div
			className="absolute -bottom-20 left-0 w-[663px] h-[540px] flex-shrink-0 blur-[12px] pointer-events-none bg-[url('/bg.svg')] bg-no-repeat"
		  />
		)}

		{/* Content wrapper */}
		<div className={`relative z-10 w-full ${showBackground ? 'h-full' : ''}`}>{children}</div>
	  </div>
	</div>
  )
}

export default Container;
