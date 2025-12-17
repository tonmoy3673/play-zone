import LeadUserCard from "./LeadUserCard";

type LeadUser = {
    name: string;
    points: number;
    position: number;
    image: string;
};
export default function LeaderboardList() {
    const leadUsers: LeadUser[] = [
        {
            name: "Jane Cooper",
            points: 210,
            position: 4,
            image: "/images/user/l4.png",
        },
        {
            name: "Ronald Richards",
            points: 197,
            position: 5,
            image: "/images/user/l5.png",
        },
        {
            name: "Marvin McKinney",
            points: 185,
            position: 6,
            image: "/images/user/l6.png",
        },
        {
            name: "Kristin Watson",
            points: 184,
            position: 7,
            image: "/images/user/l7.png",
        },
        {
            name: "Esther Howard",
            points: 172,
            position: 8,
            image: "/images/user/l8.png",
        },
        {
            name: "Marvin McKinney",
            points: 165,
            position: 9,
            image: "/images/user/l6.png",
        },
        {
            name: "Kristin Watson",
            points: 124,
            position: 10,
            image: "/images/user/l7.png",
        },
    ];
    return (
        <div className="space-y-3">
            {leadUsers.map((user) => (
                <LeadUserCard
                    key={user.position}
                    name={user.name}
                    points={user.points}
                    position={user.position}
                    image={user.image}
                />
            ))}
        </div>
    );
}
