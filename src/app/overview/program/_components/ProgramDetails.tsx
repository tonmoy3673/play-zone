import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Icon, { IconName } from "@/utils/icon";
import Textarea from "@/components/ui/Textarea";

const ProgramDetails = () => {
  return (
    <section>
      <div className="max-w-[500px] space-y-1 mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-dark">
          Program Details
        </h2>

        <p className="text-base text-black/60">
          Select the format that fits your coaching goals and athlete needs. You
          can always create additional programs later
        </p>
      </div>

      <form className="grid lg:grid-cols-2 gap-4">
        <Card className="md:p-6 md:rounded-[30px]">
          <div className="bg-[url('/card-bottom-blur-image.svg')] absolute left-0 bottom-0 bg-no-repeat bg-left-bottom h-[540px] w-[663px] z-[-1]" />

          <div className="space-y-4">
            <Input
              placeholder="Enter Program Title"
              label="Program Title"
              className="bg-white/60"
            />

            <Textarea
              label="Description"
              placeholder="Describe your program..."
              className="bg-white/60"
            />

            <div className="grid gap-3">
              <label className="font-medium text-sm">Program Thumbnail </label>
              <label className="bg-white/60 border border-dashed border-[#276AEE] cursor-pointer p-6 rounded-2xl text-center flex flex-col items-center justify-between">
                <input type="file" name="thumbnail" className="peer sr-only" />

                <div className="size-12 rounded-full bg-white flex items-center justify-center">
                  <Icon
                    name="cloud_upload"
                    height={20}
                    width={20}
                    className="text-dark"
                  />
                </div>

                <div className="grid gap-1">
                  <span className="text-xs font-medium text-dark">
                    Upload Program Thumbnail Image
                  </span>
                  <span className="text-sm text-dark/70">or</span>
                  <span className="text-xs font-medium primary-gradient-text">
                    Browse Files
                  </span>
                </div>
              </label>
            </div>

            <div className="grid gap-2">
              <label className="font-medium text-sm mb-1">Gallery</label>

              <div className="grid grid-cols-3 gap-3">
                <div className="w-full aspect-[142/90] bg-gray-300 rounded-2xl bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg')]"></div>

                <Card className="flex flex-col gap-4 items-center justify-center w-full aspect-[142/90] bg-white/60 md:rounded-2xl">
                  <Icon
                    name="plus"
                    width={24}
                    height={24}
                    className="text-[#276AEE]"
                  />
                  <p className="text-sm primary-gradient-text">Add Picture</p>
                </Card>

                <Card className="flex flex-col gap-4 items-center justify-center w-full aspect-[142/90] bg-white/60 md:rounded-2xl">
                  <Icon
                    name="plus"
                    width={24}
                    height={24}
                    className="text-[#276AEE]"
                  />
                  <p className="text-sm primary-gradient-text">Add Picture</p>
                </Card>
              </div>

              <p className="text-xs text-dark/70 mt-2">
                Pro users can upload videos and up to 10 pictures
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Select
                label="Sport"
                placeholder="Select Sport"
                className="bg-white/60"
                options={[
                  {
                    label: "Football",
                    value: "Football",
                  },
                ]}
              />
              <Select
                label="Position (Optional)"
                placeholder="Select Sport"
                className="bg-white/60"
                options={[
                  {
                    label: "Position one",
                    value: "Position one",
                  },
                ]}
              />
            </div>

            <Select
              label="Skill Level"
              placeholder="Select your skill level"
              className="bg-white/60"
              options={[
                {
                  label: "Begainner",
                  value: "Begainner",
                },
              ]}
            />
          </div>
        </Card>

        <Card className="md:p-6 md:rounded-[30px]">
          <div className="bg-[url('/card-bottom-blur-image.svg')] absolute left-0 bottom-0 bg-no-repeat bg-left-bottom h-[540px] w-[663px] z-[-1]" />

          <div className="space-y-4">
            <div className="grid gap-3">
              <label className="font-medium">Age Range</label>

              <div className="space-y-2">
                {[
                  {
                    value: "All ages",
                    label: "All ages",
                    desc: "Select all ages people",
                  },
                  {
                    value: "Youth (8-12)",
                    label: "Youth (8-12)",
                    desc: "Elementary school age",
                  },
                  {
                    value: "Teen (13-17)",
                    label: "Teen (13-17)",
                    desc: "Middle & high school",
                  },
                  {
                    value: "Adult (18+)",
                    label: "Adult (18+)",
                    desc: "College & professional",
                  },
                ].map(({ value, label, desc }) => (
                  <Card key={value} className="bg-white/60 md:rounded-2xl">
                    <label className="flex cursor-pointer items-center gap-2 w-full">
                      <input
                        type="radio"
                        name="age"
                        value={value}
                        className="peer sr-only"
                      />

                      <div className="size-[18px] shrink-0 rounded-full border-2 border-[#A1A4AE] peer-checked:border-[#5C8FF7] relative after:absolute after:size-2 after:bg-primary-gradient after:rounded-full after:hidden after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:block after:transition-all transition-all"></div>

                      <div className="flex-1 text-sm flex items-center justify-between">
                        <span className="peer-checked:text-blue-600">
                          {label}
                        </span>
                        <span className="text-dark/70">{desc}</span>
                      </div>
                    </label>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <label className="font-medium text-sm">Gender</label>

              <div className="grid grid-cols-3 gap-3 text-sm text-dark">
                {[
                  {
                    label: "All",
                    value: "All",
                    icon: "dashboard_circle" as IconName,
                  },
                  {
                    label: "Male",
                    value: "Male",
                    icon: "male" as IconName,
                  },
                  {
                    label: "Female",
                    value: "Female",
                    icon: "female" as IconName,
                  },
                ].map(({ label, value, icon }) => (
                  <label
                    key={value}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="formate"
                      value={value}
                      className="peer sr-only"
                    />
                    <div className="h-14 w-full rounded-2xl group/icon relative border border-white text-dark/70 bg-white/60 flex items-center gap-3 justify-center transition-all px-5 peer-checked:!bg-primary-gradient peer-checked:border-[#1556D84D] peer-checked:text-white">
                      <Icon name={icon} height={24} width={24} />
                      {label}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <label
                htmlFor="location"
                className="flex items-center gap-3 text-sm font-medium text-dark"
              >
                <span>Location</span>
                <Icon name="location" height={18} width={18} />
              </label>

              <Select
                placeholder="Global (All Location)"
                className="bg-white/60"
                options={[
                  {
                    label: "Global (All Location)",
                    value: "Global (All Location)",
                  },
                ]}
              />
            </div>

            <div className="grid gap-3">
              <label
                htmlFor="location"
                className="flex items-center gap-3 text-sm font-medium text-dark"
              >
                <span>Language</span>
                <Icon name="global_sync" height={18} width={18} />
              </label>

              <Select
                placeholder="Select Language"
                className="bg-white/60"
                options={[
                  {
                    label: "English",
                    value: "English",
                  },
                  {
                    label: "Bangla",
                    value: "Bangla",
                  },
                ]}
              />
            </div>
          </div>

          <Card className="mt-8 md:rounded-2xl">
            <p className="text-sm text-dark/70">
              <strong className="font-semibold text-dark">Best for:</strong>
              Long-term passive content and skill development. Perfect for
              fundamental training that remains relevant over time.
            </p>
          </Card>
        </Card>
      </form>
    </section>
  );
};

export default ProgramDetails;
