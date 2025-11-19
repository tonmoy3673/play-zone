import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Icon from "@/utils/icon";
import Image from "next/image";

const Profile = () => {
  return (
    <Card className="mb-2 bg-white/60">
      <div className="border-2 border-[#68B0EA] rounded-full overflow-hidden relative size-14">
        <Image
          src={
            "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?it=crop&q=80&w=735"
          }
          alt="Profile"
          className="size-full object-cover"
          fill
        />
      </div>

      <div className="mt-2 mb-5 space-x-0.5">
        <h4 className="text-base font-medium text-dark">Mike_Thompson</h4>
        <div className="flex items-center gap-2 text-xs font-medium">
          <div className="flex gap-1.5 items-center">
            <Icon
              name="crown"
              height={16}
              width={16}
              className="text-[#5C8FF7]"
            />
            <span className="primary-gradient-text">Premium</span>
          </div>
          <span className="text-dark/70">• Last login 2h ago</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-1.5 flex-wrap">
          <span className="text-xs text-dark/70">Programs</span>
          <span className="text-[10px] text-dark font-medium">12</span>
        </div>
        <div className="flex items-center justify-between gap-1.5 flex-wrap">
          <span className="text-xs text-dark/70">Support History:</span>
          <span className="text-[10px] text-dark font-medium">3 Tickets</span>
        </div>
        <div className="flex items-center justify-between gap-1.5 flex-wrap">
          <span className="text-xs text-dark/70">Member Since:</span>
          <span className="text-[10px] text-dark font-medium">
            Jan, 15, 2024
          </span>
        </div>
        <div className="flex items-center justify-between gap-1.5 flex-wrap">
          <span className="text-xs text-dark/70">Account Status:</span>
          <Badge variant="success" className="h-[17px] text-[10px]">
            Active
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
