import { AnimatedButton } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import Icon from "@/utils/icon";
import React from "react";

type PermissionStatus = "full" | "view" | "none";

type PermissionRow = {
  category: string;
  description: string;
  statuses: PermissionStatus[];
};

type RoleSummary = {
  title: string;
  description: string;
  permissions: number;
};

type CommunityTool = {
  name: string;
  description: string;
  enabled: boolean;
};

type LeaderboardSetting = {
  name: string;
  enabled: boolean;
};

type Reward = {
  label: string;
  points: string;
};

type StaffMember = {
  name: string;
  email: string;
  role: string;
  avatar: string;
};

const roleSummaries: RoleSummary[] = [
  {
    title: "Assistant Coach",
    description: "Full program management access",
    permissions: 12,
  },
  {
    title: "Analyst",
    description: "Data and analytics focused",
    permissions: 6,
  },
  {
    title: "Content Manager",
    description: "Content creation and editing",
    permissions: 8,
  },
  {
    title: "Moderator",
    description: "Community management only",
    permissions: 4,
  },
];

const permissionRows: PermissionRow[] = [
  {
    category: "Athlete Management",
    description: "Add, remove, and manage athletes",
    statuses: ["full", "none", "none", "none"],
  },
  {
    category: "Analytics & Reports",
    description: "View program analytics and generate reports",
    statuses: ["full", "full", "view", "none"],
  },
  {
    category: "Content Creation",
    description: "Create and edit program content",
    statuses: ["full", "none", "full", "none"],
  },
  {
    category: "Community Moderation",
    description: "Moderate discussions and manage community",
    statuses: ["full", "none", "none", "full"],
  },
  {
    category: "Award Points & Achievements",
    description: "Manage leaderboards and award points",
    statuses: ["full", "none", "none", "none"],
  },
  {
    category: "Schedule Management",
    description: "Create and modify program schedules",
    statuses: ["full", "none", "view", "none"],
  },
  {
    category: "Financial Management",
    description: "View revenue and manage payments",
    statuses: ["full", "none", "none", "none"],
  },
];

const communityTools: CommunityTool[] = [
  {
    name: "Program Discussion Forum",
    description: "Allow athletes to discuss topics and ask questions",
    enabled: true,
  },
  {
    name: "Group Chat",
    description: "Real-time messaging for quick communication",
    enabled: false,
  },
  {
    name: "Leaderboard Visibility",
    description: "Show program stats and rankings to athletes",
    enabled: false,
  },
  {
    name: "Program Activity Feed",
    description: "Share updates, achievements, and announcements",
    enabled: false,
  },
];

const leaderboardRewards: Reward[] = [
  { label: "Task Completion", points: "2-5 pts" },
  { label: "Live Session", points: "3 pts" },
  { label: "Daily Streak", points: "1 pt" },
];

const leaderboardSettings: LeaderboardSetting[] = [
  { name: "Weekly Reset", enabled: true },
  { name: "Public Rankings", enabled: false },
  { name: "Streak Bonuses", enabled: false },
];

const staffMembers: StaffMember[] = [
  {
    name: "Sarah Martinez",
    email: "sarah.martinez@email.com",
    role: "Assistant Coach",
    avatar: "https://i.pravatar.cc/96?img=47",
  },
  {
    name: "Mike Johnson",
    email: "mike.johnson@email.com",
    role: "Analyst",
    avatar: "https://i.pravatar.cc/96?img=12",
  },
];

const RolePermissions = () => {
  return (
    <section>
      <HeaderArea />

      <div className="space-y-4">
        <PermissionSummary />
        <PermissionMatrix />
        <CommunityToolsPanel />
        <LeaderboardSystem />
        <StaffManagement />
      </div>
    </section>
  );
};

const HeaderArea = () => {
  return (
    <div className="max-w-[500px] space-y-1 mb-8 md:mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-dark">
        Role Permissions Management
      </h2>

      <p className="text-base text-black/60">
        Configure detailed permissions for each staff role to ensure proper
        access control and program security.
      </p>
    </div>
  );
};

const PermissionSummary = () => {
  return (
    <Card className="relative md:rounded-[30px] md:p-6 lg:p-8 ">
      <div className="bg-[url('/card-bottom-blur-image.svg')] absolute left-0 bottom-0 bg-no-repeat bg-left-bottom h-[540px] w-[663px] z-[-1]" />

      <div className="flex items-end justify-between gap-3 flex-wrap mb-6 md:mb-8">
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-2xl border border-white flex items-center justify-center">
            <Icon name="running" width={24} height={24} />
          </div>

          <div className="space-y-1">
            <h2 className="text-base font-medium text-dark">
              Permission Settings
            </h2>
            <p className="max-w-md text-xs text-dark/70">
              Manage what each role can access and modify
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap items-center">
          <button className="h-12 inline-flex items-center justify-center gap-2 rounded-full bg-white/60 border border-white px-5 py-2.5 text-sm font-medium text-dark transition">
            <Icon
              name="cloud_upload_outline"
              width={24}
              height={24}
              className="text-[#595F70]"
            />
            Export
          </button>
          <button className="h-12 inline-flex items-center justify-center gap-2 rounded-full bg-white/60 border border-white px-8 py-3 text-sm font-medium text-dark transition">
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roleSummaries.map((role) => (
          <Card
            key={role.title}
            className="p-4 flex flex-col gap-4 md:rounded-2xl bg-white/60 transition hover:-translate-y-0.5"
          >
            <div>
              <div className="inline-flex h-[30px] items-center justify-center gap-1.5 rounded-full border-t border-[#68B0EA] bg-white/40 px-4 py-2">
                <div className="size-2 rounded-full border-t border-[#68B0EA] bg-primary-gradient shadow-[0_2px_4px_0_rgba(39,106,238,0.60)]" />
                <span className="text-[10px] font-medium primary-gradient-text">
                  Active
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-dark">{role.title}</p>
              <p className="mt-1 text-xs text-dark/70">{role.description}</p>
            </div>

            <div className="flex items-center justify-between text-[10px] font-medium">
              <p className="tracking-wide text-dark/70">
                {role.permissions} permissions
              </p>
              <button className="primary-gradient-text">Edit</button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

const PermissionMatrix = () => {
  const roleHeaders = [
    { title: "Assistant Coach", subtitle: "Full Access" },
    { title: "Analyst", subtitle: "Data Focus" },
    { title: "Content Manager", subtitle: "Content Only" },
    { title: "Moderator", subtitle: "Community" },
  ];

  return (
    <Card className="md:rounded-[30px] px-4 py-5">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-white/60 border border-white flex items-center justify-center">
              <Icon name="running" width={24} height={24} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dark">
                Role Permissions
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-12 flex w-full max-w-md items-center gap-3 rounded-full bg-white/60 border border-white px-4 py-3 md:w-auto">
              <Icon
                height={20}
                width={20}
                name="search"
                className="text-[#596070]"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-sm text-dark outline-none placeholder:text-[#596070]/70"
              />
            </div>
            <button className="h-12 inline-flex items-center gap-2 rounded-full bg-white/60 border border-white px-5 py-3 text-sm font-medium text-dark  transition hover:bg-white">
              <Icon name="filter" width={15} height={13} />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-white/60 border border-white !rounded-xl">
                <th className="text-left text-base font-medium text-dark p-4">
                  Permission Category
                </th>
                {roleHeaders.map((role) => (
                  <th key={role.title} className="p-4">
                    <p className="font-medium text-base text-dark">
                      {role.title}
                    </p>
                    <p className="text-xs text-dark/70 font-normal">
                      {role.subtitle}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {permissionRows.map((row) => (
                <tr
                  key={row.category}
                  className=" border-b border-white last:border-b-0 last:pb-0"
                >
                  <td className="py-3">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-white/60 border border-white flex items-center justify-center">
                        <Icon name="running" width={24} height={24} />
                      </div>

                      <div className="space-y-1">
                        <p className="font-medium text-sm text-dark">
                          {row.category}
                        </p>
                        <p className="text-xs text-dark/70">
                          {row.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  {row.statuses.map((status, index) => (
                    <td key={`${row.category}-${index}`} className="py-3">
                      <div className="size-10 border border-white/70 backdrop-blur-[2px] rounded-full flex items-center justify-center">
                        <PermissionStatusBadge status={status} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

const CommunityToolsPanel = () => {
  return (
    <Card className="md:rounded-[30px] p-6 md:p-8">
      <div className="space-y-[18px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-full bg-white/60 border border-white flex items-center justify-center">
              <Icon name="running" width={24} height={24} />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-medium text-dark">
                Community Tools
              </h3>
              <p className="max-w-2xl text-xs text-dark/70">
                Enable/Disable all program communication features. Turning this
                off makes the program fully coach-directed with no
                athlete-to-athlete interaction
              </p>
            </div>
          </div>

          <Switch value={false} />
        </div>

        <Card className="md:rounded-2xl p-4 bg-white/60">
          <ul className="space-y-3">
            {communityTools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-start gap-3">
                  <div className="size-12 rounded-full bg-white border border-white flex items-center justify-center">
                    <Icon name="running" width={24} height={24} />
                  </div>

                  <div className="space-y-1">
                    <p className="font-medium text-sm text-dark">{tool.name}</p>
                    <p className="text-sm text-dark/70">{tool.description}</p>
                  </div>
                </div>
                <Switch value={tool.enabled} />
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Card>
  );
};

const LeaderboardSystem = () => {
  return (
    <Card className="md:rounded-[30px] p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
        <h3 className="text-base font-medium text-dark">Leaderboard System</h3>
        <Switch value={false} />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <Card className="md:rounded-2xl bg-white/60 p-4 space-y-2">
          <h4 className="text-sm font-medium text-dark">
            Basketball Fundamentals
          </h4>

          <div className="space-y-1 text-sm text-dark/70">
            {leaderboardRewards.map((reward) => (
              <div
                key={reward.label}
                className="flex items-center justify-between py-2 border-b border-white last:border-b-0 last:pb-0"
              >
                <span>{reward.label}</span>
                <span className="font-medium text-dark">{reward.points}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="md:rounded-2xl bg-white/60 p-4 space-y-2">
          <h4 className="text-sm font-medium text-dark">
            Leaderboard Settings
          </h4>

          <div className="space-y-3 text-sm text-dark/70">
            {leaderboardSettings.map((setting) => (
              <div
                key={setting.name}
                className="flex items-center justify-between"
              >
                <span>{setting.name}</span>
                <Switch value={setting.enabled} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-white/60 md:col-span-2 rounded-xl md:rounded-xl flex items-center justify-center gap-2 p-4">
          <Icon
            name="plus"
            height={20}
            width={20}
            className=" text-[#276AEE]"
          />
          <span className="text-sm font-medium primary-gradient-text">
            Schedule Session
          </span>
        </Card>
      </div>
    </Card>
  );
};

const StaffManagement = () => {
  return (
    <Card className="md:rounded-[30px] p-6 md:p-8">
      <div className="bg-[url('/card-bottom-blur-image.svg')] absolute left-0 bottom-0 bg-no-repeat bg-left-bottom h-[540px] w-[663px] z-[-1]" />

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-full border bg-white/60 border-white flex items-center justify-center">
            <Icon name="running" width={24} height={24} />
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-medium text-dark">
              Staff Management
            </h3>
            <p className="max-w-2xl text-xs text-dark/70">
              Add team members and assign roles.
            </p>
          </div>
        </div>

        <button className="h-14 inline-flex items-center gap-2 rounded-full bg-white/60 border border-white px-5 py-3 text-sm font-medium transition hover:bg-white">
          <Icon
            name="plus"
            height={20}
            width={20}
            className=" text-[#276AEE]"
          />
          <span className="text-sm font-medium primary-gradient-text">
            Add Staff Member
          </span>
        </button>
      </div>

      <div className="space-y-2">
        {staffMembers.map((staff) => (
          <Card
            key={staff.email}
            className="flex flex-col gap-4 md:rounded-2xl bg-white/60 p-4  md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={staff.avatar}
                alt={staff.name}
                className="size-12 rounded-xl object-cover shadow-inner"
              />
              <div>
                <p className="text-sm font-medium text-dark">{staff.name}</p>
                <p className="text-sm mt-1 text-dark/70">{staff.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Select
                className="bg-[#EEF6F8] rounded-xl"
                options={[
                  { label: "Assistant Coach", value: "Assistant Coach" },
                ]}
              />

              <div className="flex items-center gap-5">
                <Icon name="setting" width={20} height={20} />
                <Icon
                  name="delete"
                  width={20}
                  height={20}
                  className="text-[#FD3131]"
                />
              </div>
            </div>
          </Card>
        ))}

        <Card className="md:rounded-2xl">
          <h4 className="text-base font-medium text-dark">
            Add New Staff Member
          </h4>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Input
              type="email"
              label="Email or Username"
              placeholder="Enter email or username"
              className="bg-white/60"
            />
            <Select
              label="Role"
              placeholder="Select Role"
              options={[
                {
                  label: "Admin",
                  value: "Admin",
                },
                {
                  label: "User",
                  value: "User",
                },
              ]}
              className="bg-white/60"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <AnimatedButton className="h-14 inline-flex items-center gap-2 rounded-full bg-[#578CF626] px-6 py-3 transition">
              <Icon
                name="sent"
                height={20}
                width={20}
                className="text-[#2563eb]"
              />
              <span className="text-sm font-medium primary-gradient-text">
                Send Invitation
              </span>
            </AnimatedButton>
          </div>
        </Card>
      </div>
    </Card>
  );
};

const PermissionStatusBadge = ({ status }: { status: PermissionStatus }) => {
  if (status === "full") {
    return (
      <Icon
        name="checkmark_circle"
        height={24}
        width={24}
        className="text-[#276AEE]"
      />
    );
  }

  if (status === "view") {
    return (
      <Icon name="eye_fill" height={24} width={24} className="text-dark" />
    );
  }

  return (
    <Icon
      name="cancel_circle"
      height={24}
      width={24}
      className="text-dark/60"
    />
  );
};

export default RolePermissions;
