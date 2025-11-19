import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Icon from "@/utils/icon";

const ContentUpdate = () => {
  return (
    <Card className="md:py-8">
      <form className="space-y-4">
        <Input label="Document Title" placeholder="Terms & Service" />

        <div className="space-y-2">
          <Card className="bg-white/60 md:rounded-2xl flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <Icon
                name="text_bold"
                height={16}
                width={16}
                className="text-[#595F70] hover:text-[#276AEE]"
              />
              <Icon
                name="text_italic"
                height={16}
                width={16}
                className="text-[#595F70] hover:text-[#276AEE]"
              />
              <Icon
                name="text_underline"
                height={16}
                width={16}
                className="text-[#595F70] hover:text-[#276AEE]"
              />
            </div>

            <div className="h-3.5 w-px bg-[#D5D5D5]" />

            <div className="flex items-center gap-2.5">
              <Icon
                name="left_to_right_list_bullet"
                height={16}
                width={16}
                className="text-[#595F70] hover:text-[#276AEE]"
              />
              <Icon
                name="left_to_right_list_number"
                height={16}
                width={16}
                className="text-[#595F70] hover:text-[#276AEE]"
              />
            </div>

            <div className="h-3.5 w-px bg-[#D5D5D5]" />

            <div className="flex items-center gap-2.5">
              <Icon
                name="link"
                height={16}
                width={16}
                className="text-[#595F70] hover:text-[#276AEE]"
              />
              <Icon
                name="eye"
                height={16}
                width={16}
                className="text-[#595F70] hover:text-[#276AEE]"
              />
              <Icon
                name="kid"
                height={16}
                width={16}
                className="text-[#595F70] hover:text-[#276AEE]"
              />
            </div>
          </Card>

          <Card className="bg-white/60 md:rounded-2xl space-y-5">
            <div className="space-y-2">
              <h5 className="text-base font-medium text-dark">
                1. Acceptance of Terms
              </h5>
              <p className="text-sm text-dark/70">
                By accessing and using Translucent Workspace, you accept and
                agree to be bound by the terms and provision of this agreement.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-medium text-dark">
                2. User Accounts
              </h5>
              <p className="text-sm text-dark/70">
                You are responsible for safeguarding the password that you use
                to access the service and for all activities that occur under
                your account.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-medium text-dark">
                3. Subscription Services
              </h5>
              <p className="text-sm text-dark/70">
                Some parts of the service are billed on a subscription basis.
                You will be billed in advance on a recurring basis.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-medium text-dark">
                4. Content Policy
              </h5>
              <p className="text-sm text-dark/70">
                Some parts of the service are billed on a subscription basis.
                You will be billed in advance on a recurring basis.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-medium text-dark">
                5. Subscription Services
              </h5>
              <p className="text-sm text-dark/70">
                Some parts of the service are billed on a subscription basis.
                You will be billed in advance on a recurring basis.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-medium text-dark">
                6. Acceptance of Terms
              </h5>
              <p className="text-sm text-dark/70">
                Some parts of the service are billed on a subscription basis.
                You will be billed in advance on a recurring basis.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-medium text-dark">
                7. Content Policy
              </h5>
              <p className="text-sm text-dark/70">
                Some parts of the service are billed on a subscription basis.
                You will be billed in advance on a recurring basis.
              </p>
            </div>
          </Card>
        </div>
      </form>
    </Card>
  );
};

export default ContentUpdate;
