import React from 'react';

type PermissionStatus = 'full' | 'view' | 'none';

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

type CalendarConfig = {
  month: string;
  daysOfWeek: string[];
  weeks: Array<Array<number | null>>;
  selectedDay: number;
  highlightedDays: number[];
};

const roleSummaries: RoleSummary[] = [
  {
    title: 'Assistant Coach',
    description: 'Full program management access',
    permissions: 12,
  },
  {
    title: 'Analyst',
    description: 'Data and analytics focused',
    permissions: 6,
  },
  {
    title: 'Content Manager',
    description: 'Content creation and editing',
    permissions: 8,
  },
  {
    title: 'Moderator',
    description: 'Community management only',
    permissions: 4,
  },
];

const permissionRows: PermissionRow[] = [
  {
    category: 'Athlete Management',
    description: 'Add, remove, and manage athletes',
    statuses: ['full', 'none', 'none', 'none'],
  },
  {
    category: 'Analytics & Reports',
    description: 'View program analytics and generate reports',
    statuses: ['full', 'full', 'view', 'none'],
  },
  {
    category: 'Content Creation',
    description: 'Create and edit program content',
    statuses: ['full', 'none', 'full', 'none'],
  },
  {
    category: 'Community Moderation',
    description: 'Moderate discussions and manage community',
    statuses: ['full', 'none', 'none', 'full'],
  },
  {
    category: 'Award Points & Achievements',
    description: 'Manage leaderboards and award points',
    statuses: ['full', 'none', 'none', 'none'],
  },
  {
    category: 'Schedule Management',
    description: 'Create and modify program schedules',
    statuses: ['full', 'none', 'view', 'none'],
  },
  {
    category: 'Financial Management',
    description: 'View revenue and manage payments',
    statuses: ['full', 'none', 'none', 'none'],
  },
];

const communityTools: CommunityTool[] = [
  {
    name: 'Program Discussion Forum',
    description: 'Allow athletes to discuss topics and ask questions',
    enabled: true,
  },
  {
    name: 'Group Chat',
    description: 'Real-time messaging for quick communication',
    enabled: false,
  },
  {
    name: 'Leaderboard Visibility',
    description: 'Show program stats and rankings to athletes',
    enabled: false,
  },
  {
    name: 'Program Activity Feed',
    description: 'Share updates, achievements, and announcements',
    enabled: false,
  },
];

const leaderboardRewards: Reward[] = [
  { label: 'Task Completion', points: '2-5 pts' },
  { label: 'Live Session', points: '3 pts' },
  { label: 'Daily Streak', points: '1 pt' },
];

const leaderboardSettings: LeaderboardSetting[] = [
  { name: 'Weekly Reset', enabled: true },
  { name: 'Public Rankings', enabled: false },
  { name: 'Streak Bonuses', enabled: false },
];

const staffMembers: StaffMember[] = [
  {
    name: 'Sarah Martinez',
    email: 'sarah.martinez@email.com',
    role: 'Assistant Coach',
    avatar: 'https://i.pravatar.cc/96?img=47',
  },
  {
    name: 'Mike Johnson',
    email: 'mike.johnson@email.com',
    role: 'Analyst',
    avatar: 'https://i.pravatar.cc/96?img=12',
  },
];

const calendarConfig: CalendarConfig = {
  month: 'October 2025',
  daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weeks: [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, null, null],
  ],
  selectedDay: 12,
  highlightedDays: [6, 14, 24],
};

const RolePermissions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2f7ff] via-[#eef4ff] to-[#f2faff] px-4 py-10 text-[#141b34] sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <HeaderActions />
        <PermissionSummary />
        <PermissionMatrix />
        <CommunityToolsPanel />
        <LeaderboardSystem />
        <StaffManagement />
      </div>
    </div>
  );
};

const HeaderActions = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start justify-between gap-4 rounded-[28px] bg-white/50 p-4 text-sm shadow-sm ring-1 ring-white/40 backdrop-blur md:flex-row md:items-center md:p-6 lg:p-7">
        <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[15px] font-medium text-[#1d2e4c] shadow-sm transition hover:bg-white">
          <ArrowLeftIcon className="h-5 w-5 text-[#1d2e4c]" />
          Back
        </button>
        <div className="flex w-full flex-col gap-3 text-right md:w-auto md:flex-row md:items-center md:gap-3">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-medium text-[#1d2e4c] shadow-sm transition hover:bg-white">
            <UploadIcon className="h-5 w-5 text-[#1d2e4c]" />
            Export
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4f8dfd] to-[#2563eb] px-8 py-3 text-sm font-medium text-white shadow-md transition hover:from-[#3f7ffc] hover:to-[#1f55d6]">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const PermissionSummary = () => {
  return (
    <div className="rounded-[32px] bg-white/50 p-6 text-sm shadow-sm ring-1 ring-white/40 backdrop-blur lg:p-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <IconBadge />
          <div>
            <h2 className="text-xl font-semibold text-[#0f1f3d]">Permission Settings</h2>
            <p className="mt-1 max-w-md text-sm text-[#141b34]/70">
              Manage what each role can access and modify across your Playzone program.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <SearchInput />
          <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-medium text-[#1d2e4c] shadow-sm transition hover:bg-white">
            <FilterIcon className="h-5 w-5 text-[#1d2e4c]" />
            Filter
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roleSummaries.map((role) => (
          <div
            key={role.title}
            className="flex flex-col gap-3 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-white/40 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5f95ff]/40 bg-[#f5f9ff] px-3 py-1 text-xs font-semibold text-[#2f6bff]">
                <span className="size-2 rounded-full bg-[#2f6bff]" />
                Active
              </span>
              <button className="rounded-full px-3 py-1 text-xs font-medium text-[#2f6bff] transition hover:bg-[#2f6bff] hover:text-white">
                Edit
              </button>
            </div>
            <div>
              <p className="text-base font-semibold text-[#0f1f3d]">{role.title}</p>
              <p className="mt-1 text-sm text-[#141b34]/70">{role.description}</p>
            </div>
            <p className="mt-auto text-xs font-medium uppercase tracking-wide text-[#141b34]/60">
              {role.permissions} permissions
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PermissionMatrix = () => {
  const roleHeaders = [
    { title: 'Assistant Coach', subtitle: 'Full Access' },
    { title: 'Analyst', subtitle: 'Data Focus' },
    { title: 'Content Manager', subtitle: 'Content Only' },
    { title: 'Moderator', subtitle: 'Community' },
  ];

  return (
    <div className="rounded-[32px] bg-white/50 p-6 text-sm shadow-sm ring-1 ring-white/40 backdrop-blur lg:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <IconBadge />
            <div>
              <h3 className="text-xl font-semibold text-[#0f1f3d]">Role Permissions</h3>
              <p className="text-sm text-[#141b34]/70">Compare capabilities across each staff role.</p>
            </div>
          </div>
          <div className="flex w-full max-w-md items-center gap-3 rounded-full bg-white/80 px-4 py-3 shadow-inner md:w-auto">
            <SearchIcon className="h-5 w-5 text-[#596070]" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-sm text-[#141b34] outline-none placeholder:text-[#596070]/70"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/50 bg-[#f5fbff]">
          <div className="grid grid-cols-[280px_repeat(4,1fr)] gap-px bg-white/20 text-sm text-[#0f1f3d]">
            <div className="bg-[#f0f6ff] px-6 py-5 font-medium">Permission Category</div>
            {roleHeaders.map((role) => (
              <div key={role.title} className="bg-[#f0f6ff] px-6 py-4">
                <p className="font-semibold">{role.title}</p>
                <p className="text-xs text-[#141b34]/60">{role.subtitle}</p>
              </div>
            ))}
            {permissionRows.map((row) => (
              <React.Fragment key={row.category}>
                <div className="flex items-center gap-4 bg-white/80 px-6 py-5">
                  <IconBadge variant="muted" />
                  <div>
                    <p className="font-medium text-[#0f1f3d]">{row.category}</p>
                    <p className="text-xs text-[#141b34]/60">{row.description}</p>
                  </div>
                </div>
                {row.statuses.map((status, index) => (
                  <div
                    key={`${row.category}-${index}`}
                    className="flex items-center justify-center bg-white/60 px-6 py-5"
                  >
                    <PermissionStatusBadge status={status} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CommunityToolsPanel = () => {
  return (
    <div className="rounded-[32px] bg-white/50 p-6 text-sm shadow-sm ring-1 ring-white/40 backdrop-blur lg:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <IconBadge />
            <div>
              <h3 className="text-xl font-semibold text-[#0f1f3d]">Community Tools</h3>
              <p className="max-w-2xl text-sm text-[#141b34]/70">
                Enable or disable communication features. Turning this off makes the program fully coach-directed with
                no athlete-to-athlete interaction.
              </p>
            </div>
          </div>
          <TogglePill pressed ariaLabel="Toggle all community tools" />
        </div>

        <div className="rounded-3xl border border-white/50 bg-white/70">
          <ul className="divide-y divide-white/60">
            {communityTools.map((tool) => (
              <li key={tool.name} className="flex items-center justify-between gap-6 px-6 py-5">
                <div className="flex items-start gap-4">
                  <IconBadge variant="solid" />
                  <div>
                    <p className="font-medium text-[#0f1f3d]">{tool.name}</p>
                    <p className="text-sm text-[#141b34]/70">{tool.description}</p>
                  </div>
                </div>
                <TogglePill pressed={tool.enabled} ariaLabel={`Toggle ${tool.name}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const LeaderboardSystem = () => {
  return (
    <div className="rounded-[32px] bg-white/50 p-6 text-sm shadow-sm ring-1 ring-white/40 backdrop-blur lg:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h3 className="text-xl font-semibold text-[#0f1f3d]">Leaderboard System</h3>
          <TogglePill pressed ariaLabel="Toggle leaderboard system" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm">
            <h4 className="text-base font-semibold text-[#0f1f3d]">Basketball Fundamentals</h4>
            <div className="mt-4 space-y-4 text-sm text-[#141b34]/70">
              {leaderboardRewards.map((reward) => (
                <div key={reward.label} className="flex items-center justify-between border-b border-white/60 pb-3 last:border-b-0 last:pb-0">
                  <span>{reward.label}</span>
                  <span className="font-medium text-[#0f1f3d]">{reward.points}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm">
              <h4 className="text-base font-semibold text-[#0f1f3d]">Leaderboard Settings</h4>
              <div className="mt-4 space-y-4 text-sm text-[#141b34]/70">
                {leaderboardSettings.map((setting) => (
                  <div key={setting.name} className="flex items-center justify-between">
                    <span>{setting.name}</span>
                    <TogglePill small pressed={setting.enabled} ariaLabel={`Toggle ${setting.name}`} />
                  </div>
                ))}
              </div>
            </div>
            <MiniCalendar config={calendarConfig} />
          </div>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/80 px-4 py-4 text-sm font-medium text-[#2f6bff] shadow-inner transition hover:bg-white">
          <PlusIcon className="h-4 w-4 text-[#2f6bff]" />
          Schedule Session
        </button>
      </div>
    </div>
  );
};

const MiniCalendar = ({ config }: { config: CalendarConfig }) => {
  const { month, daysOfWeek, weeks, selectedDay, highlightedDays } = config;

  return (
    <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/80 to-white/70 p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[#141b34]/60">Upcoming Sessions</p>
          <h4 className="text-lg font-semibold text-[#0f1f3d]">{month}</h4>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-white/60 bg-white/70 p-2 text-[#2f6bff] transition hover:bg-white">
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-white/60 bg-white/70 p-2 text-[#2f6bff] transition hover:bg-white">
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium uppercase tracking-wide text-[#141b34]/60">
        {daysOfWeek.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-2 text-sm">
        {weeks.flat().map((day, index) => {
          const isSelected = day === selectedDay;
          const isHighlighted = day ? highlightedDays.includes(day) : false;

          return (
            <div
              key={`${day ?? 'empty'}-${index}`}
              className={`flex h-10 items-center justify-center rounded-xl ${
                day === null
                  ? ''
                  : isSelected
                    ? 'bg-gradient-to-r from-[#4f8dfd] to-[#2563eb] font-semibold text-white shadow'
                    : 'bg-white/80 text-[#0f1f3d] shadow-sm'
              }`}
            >
              {day && (
                <span className="relative">
                  {day}
                  {isHighlighted && !isSelected && (
                    <span className="absolute -bottom-1 left-1/2 size-1 rounded-full bg-[#2f6bff]" aria-hidden />
                  )}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StaffManagement = () => {
  return (
    <div className="rounded-[32px] bg-white/50 p-6 text-sm shadow-sm ring-1 ring-white/40 backdrop-blur lg:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <IconBadge />
            <div>
              <h3 className="text-xl font-semibold text-[#0f1f3d]">Staff Management</h3>
              <p className="text-sm text-[#141b34]/70">Add team members and assign roles.</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-sm font-medium text-[#2f6bff] shadow-inner transition hover:bg-white">
            <PlusIcon className="h-4 w-4 text-[#2f6bff]" />
            Add Staff Member
          </button>
        </div>

        <div className="space-y-4">
          {staffMembers.map((staff) => (
            <div
              key={staff.email}
              className="flex flex-col gap-4 rounded-2xl border border-white/50 bg-white/80 p-5 shadow-sm md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={staff.avatar}
                  alt={staff.name}
                  className="size-14 rounded-2xl object-cover shadow-inner"
                />
                <div>
                  <p className="text-base font-semibold text-[#0f1f3d]">{staff.name}</p>
                  <p className="text-sm text-[#141b34]/70">{staff.email}</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
                <button className="inline-flex items-center gap-2 rounded-xl bg-[#eef5ff] px-4 py-3 text-sm font-medium text-[#2f6bff]">
                  {staff.role}
                  <ChevronDownIcon className="h-4 w-4 text-[#2f6bff]" />
                </button>
                <div className="flex items-center gap-3">
                  <IconButton ariaLabel="Adjust permissions">
                    <SettingsIcon className="h-5 w-5 text-[#2f6bff]" />
                  </IconButton>
                  <IconButton ariaLabel="Remove staff member" variant="danger">
                    <TrashIcon className="h-5 w-5 text-[#f87171]" />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[28px] border border-white/50 bg-gradient-to-br from-white/85 via-white/70 to-white/60 p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-[#0f1f3d]">Add New Staff Member</h4>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#0f1f3d]">Email or Username</label>
              <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-inner">
                <input
                  type="email"
                  placeholder="Enter email or username"
                  className="w-full bg-transparent text-sm text-[#141b34] outline-none placeholder:text-[#141b34]/60"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#0f1f3d]">Role</label>
              <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-inner">
                <input
                  type="text"
                  placeholder="Select Role"
                  className="w-full bg-transparent text-sm text-[#141b34] outline-none placeholder:text-[#141b34]/60"
                  readOnly
                />
                <ChevronDownIcon className="h-4 w-4 text-[#2f6bff]" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5c8ff7]/30 to-[#2563eb]/40 px-6 py-3 text-sm font-medium text-[#2563eb] shadow-sm transition hover:from-[#5c8ff7]/40 hover:to-[#2563eb]/50">
              <PaperPlaneIcon className="h-5 w-5 text-[#2563eb]" />
              Send Invitation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PermissionStatusBadge = ({ status }: { status: PermissionStatus }) => {
  if (status === 'full') {
    return (
      <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-r from-[#4f8dfd] to-[#2563eb] text-white shadow">
        <CheckIcon className="h-4 w-4" />
      </span>
    );
  }

  if (status === 'view') {
    return (
      <span className="flex size-8 items-center justify-center rounded-full border border-[#2563eb]/30 bg-white/90 text-[#2563eb] shadow-sm">
        <EyeIcon className="h-4 w-4" />
      </span>
    );
  }

  return (
    <span className="flex size-8 items-center justify-center rounded-full border border-[#141b34]/20 bg-white/80 text-[#141b34]/60 shadow-sm">
      <CrossIcon className="h-4 w-4" />
    </span>
  );
};

const TogglePill = ({
  pressed,
  ariaLabel,
  small,
}: {
  pressed: boolean;
  ariaLabel: string;
  small?: boolean;
}) => {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      aria-label={ariaLabel}
      className={`relative inline-flex items-center rounded-full transition ${
        small ? 'h-6 w-10' : 'h-8 w-14'
      } ${pressed ? 'bg-gradient-to-r from-[#4f8dfd] to-[#2563eb]' : 'bg-[#e3e9f5]'}`}
    >
      <span
        className={`absolute size-6 rounded-full bg-white shadow transition-all ${
          pressed ? (small ? 'translate-x-4' : 'translate-x-6') : 'translate-x-1'
        } ${small ? 'size-[18px]' : 'size-6'}`}
      />
    </button>
  );
};

const IconButton = ({
  children,
  ariaLabel,
  variant = 'default',
}: {
  children: React.ReactNode;
  ariaLabel: string;
  variant?: 'default' | 'danger';
}) => {
  const base = 'inline-flex items-center justify-center rounded-xl border px-3 py-2';
  const styles =
    variant === 'danger'
      ? 'border-[#fdecec] bg-[#fff5f5] text-[#f87171] hover:bg-[#fdecec]'
      : 'border-[#dbe7ff] bg-[#eef5ff] text-[#2f6bff] hover:bg-white';

  return (
    <button type="button" aria-label={ariaLabel} className={`${base} ${styles} transition`}>
      {children}
    </button>
  );
};

const IconBadge = ({ variant = 'soft' }: { variant?: 'soft' | 'muted' | 'solid' }) => {
  const styles = {
    soft: 'bg-[#f5f9ff] text-[#2563eb]',
    muted: 'bg-white/70 text-[#2563eb] border border-white/40',
    solid: 'bg-white text-[#2563eb] shadow-sm',
  }[variant];

  return (
    <span
      className={`flex size-12 items-center justify-center rounded-2xl ${styles}`}
    >
      <RunnerIcon className="h-6 w-6" />
    </span>
  );
};

const SearchInput = () => {
  return (
    <label className="flex w-full items-center gap-3 rounded-full border border-white/50 bg-white/80 px-4 py-3 shadow-inner md:w-72">
      <SearchIcon className="h-5 w-5 text-[#596070]" />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent text-sm text-[#141b34] outline-none placeholder:text-[#596070]/70"
      />
    </label>
  );
};

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
  </svg>
);

const UploadIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0l-3.5 3.5M12 4l3.5 3.5M6 16v2a2 2 0 002 2h8a2 2 0 002-2v-2" />
  </svg>
);

const FilterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h10M10 18h4" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <circle cx="11" cy="11" r="6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m20 20-2.4-2.4" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4 10-10" />
  </svg>
);

const EyeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path
      d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12 18.5 19.5 12 19.5 1.5 12 1.5 12Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CrossIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m7 7 10 10M17 7 7 17" />
  </svg>
);

const RunnerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 4.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm.75 6-2.023 2.023a2.25 2.25 0 0 1-1.59.659H9.5l-2 3.75M4.5 20.25l2.25-3.75h2.25M12 8.25l2.25 2.25L18 9"
    />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM19.5 15.75a2.25 2.25 0 0 0 .563 2.25l.063.063a1.5 1.5 0 0 1-1.061 2.561h-.125a2.25 2.25 0 0 0-2.25.563l-.062.063a1.5 1.5 0 0 1-2.563-1.061v-.126a2.25 2.25 0 0 0-.562-2.249 2.25 2.25 0 0 0-.563-2.25l-.062-.062a1.5 1.5 0 0 1 1.061-2.563h.125a2.25 2.25 0 0 0 2.25-.562l.062-.063a1.5 1.5 0 0 1 2.563 1.061v.125a2.25 2.25 0 0 0 .563 2.25Z"
    />
  </svg>
);

const TrashIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7V5h6v2m-8 0v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
  </svg>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
  </svg>
);

const PaperPlaneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12 15-7-4.5 14.5-3-6-7.5-1.5Z" />
  </svg>
);

export default RolePermissions;


