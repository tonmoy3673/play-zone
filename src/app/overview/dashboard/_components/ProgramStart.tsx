const imgImage341 = "https://www.figma.com/api/mcp/asset/8317cf7f-0e9f-4656-b7eb-3ed493a9aba0";
const imgRectangle2081 = "https://www.figma.com/api/mcp/asset/f5cd1c09-8833-4378-9393-36af8d3b2bf6";
const img = "https://www.figma.com/api/mcp/asset/789023ff-b982-46d4-9895-7e29db78e8c1";
const img1 = "https://www.figma.com/api/mcp/asset/8ea08a11-81b3-4e1e-ae5e-be3269e9a231";
type FrameProps = {
  className?: string;
  property1?: "Check" | "uncheck";
};

function Frame({ className, property1 = "Check" }: FrameProps) {
  if (property1 === "uncheck") {
    return (
      <div className={className} data-name="Property 1=uncheck" data-node-id="1232:10078">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="checkmark-square-02" data-node-id="1232:10079">
          <div className="absolute inset-[10.42%]" data-name="elements" data-node-id="I1232:10079;1:10337">
            <div className="absolute inset-[-3.95%]">
              <img alt="" className="block max-w-none size-full" src={img} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Check" data-node-id="1232:9998">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="checkmark-square-02" data-node-id="1232:9988">
        <div className="absolute inset-[7.29%]" data-name="elements" data-node-id="I1232:9988;1:10350">
          <img alt="" className="block max-w-none size-full" src={img1} />
        </div>
      </div>
    </div>
  );
}

const programTasks = [
    {
        id: 1,
        text: "Profile creation",
        property1: "Check",
    },
    {
        id: 2,
        text: "Program creation",
        property1: "Check",
    },
    {
        id: 3,
        text: "Creating your first tasks",
        property1: "uncheck",
        button: "Take me"
    },
    {
        id: 4,
        text: "Boosting your program",
        property1: "uncheck",
    },
]

export default function ProgramStart() {
  return (
    <div className="bg-white border-4 border-solid border-white relative rounded-[21px] size-full" data-node-id="3459:30424">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5829582810401917)+(var(--transform-inner-height)*0.8125020861625671)))] items-center justify-center left-[calc(50%+45.5px)] top-[calc(50%+-65.81px)] translate-x-[-50%] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.5829582810401917)+(var(--transform-inner-width)*0.8125020861625671)))]">
          <div className="flex-none rotate-[215.659deg] scale-y-[-100%]">
            <div className="blur-sm filter h-[561.587px] relative w-[689.691px]" data-name="image 341" data-node-id="3459:30425">
              <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[106.24%] left-[-21.02%] max-w-none top-[-2.39%] w-[120.73%]" src={imgImage341} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[16px] not-italic text-[#141b34] text-[16px] top-[28px] translate-y-[-50%] whitespace-nowrap" data-node-id="3459:30426">
          <p className="leading-[1.5]">Starting your first program</p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[63px] w-[308px]" data-node-id="3459:30427">
          <div className="content-stretch flex flex-col gap-[6px] h-[35px] items-start relative shrink-0 w-full" data-node-id="3459:30428">
            <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-between leading-[1.4] not-italic relative shrink-0 text-[#141b34] text-[12px] w-full" data-node-id="3459:30429">
              <p className="relative shrink-0" data-node-id="3459:30430">
                Complete
              </p>
              <p className="relative shrink-0" data-node-id="3459:30431">
                50%
              </p>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[2px] relative shrink-0 w-full" data-node-id="3459:30432">
              <div className="bg-[#c4d4fd] content-stretch flex flex-col gap-[10px] h-[8px] items-start relative rounded-[40px] shrink-0 w-full" data-node-id="3459:30433">
                <div className="h-[8px] relative rounded-[80px] shrink-0 w-[162px]" data-node-id="3459:30434">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[80px] size-full" src={imgRectangle2081} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-node-id="3459:30438">
            {programTasks.map((task) => (
              <div
                key={task.id}
                className="bg-[rgba(255,255,255,0.6)] box-border content-stretch flex flex-col gap-[10px] items-start p-[8px] relative rounded-[12px] shrink-0 w-[308px]"
                data-node-id="3459:30447"
              >
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                  data-node-id="3459:30448"
                >
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="3459:30449">
                    <Frame
                      property1={task.property1 as "Check" | "uncheck"}
                      className="content-stretch flex gap-[10px] items-center relative shrink-0"
                    />
                    <div
                      className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#141b34] text-[12px] whitespace-nowrap"
                      data-node-id="3459:3451"
                    >
                      <p className="leading-[1.4]">{task.text}</p>
                    </div>
                  </div>
                  {task.button && (
                    <div
                      className="border border-[rgba(21,86,216,0.3)] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0"
                      data-name="Button"
                      data-node-id="3459:30452"
                    >
                      <p
                        className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[12px] text-center text-white"
                        data-node-id="3459:30453"
                      >
                        {task.button}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
