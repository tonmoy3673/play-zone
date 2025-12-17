import Icon from '@/utils/icon';
import React from 'react';

interface TaskItem {
	type: 'uploads' | 'quiz' | 'journal' | 'workout' | 'live';
	count: number;
}

interface TaskCardProps {
	dayName: string;
	date: string;
	tasks: TaskItem[];
	isToday?: boolean;
	isTomorrow?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
	dayName, 
	date, 
	tasks,
	isToday = false,
	isTomorrow = false 
}) => {
	const getTaskIcon = (type: string) => {
		switch (type) {
			case 'uploads':
				return 'file';
			case 'quiz':
				return 'quiz';
			case 'journal':
				return 'workout';
			case 'workout':
				return 'workout';
			case 'live':
				return 'video';
			default:
				return 'upload';
		}
	};

	const getTaskColor = (type: string) => {
		switch (type) {
			case 'uploads':
				return 'text-[#141B34]';
			case 'quiz':
				return 'text-[#5C8FF7]';
			case 'journal':
				return 'text-[#5C8FF7]';
			case 'workout':
				return 'text-[#141B34]';
			case 'live':
				return 'text-[#141B34]';
			default:
				return 'text-[#141B34]';
		}
	};

	const displayName = isToday ? 'Today' : isTomorrow ? 'Tomorrow' : dayName;

	return (
		<div className="bg-[#FFFFFF99] backdrop-blur-sm border border-white rounded-2xl p-2">
			<div className="text-center mb-4 bg-white rounded-xl px-4 py-3">
				<h4 className={`text-sm font-medium mb-1 ${isToday ? 'text-[#5C8FF7]' : 'text-[#141B34]'}`}>
					{displayName}
				</h4>
				<p className="text-xs text-[#141B34]/70 font-normal">
					{date}
				</p>
			</div>
			
			<div className="space-y-3 px-3">
				{tasks.map((task, index) => (
					<div key={index} className="flex items-center space-y-1 justify-between">
						<div className="flex items-center gap-2">
							<Icon
								name="file"
								height={14}
								width={14}
								className={getTaskColor(task.type)}
							/>
							<span className="text-xs font-medium text-[#141B34] capitalize">
								{task.type === 'uploads' ? 'Uploads' : 
								 task.type === 'quiz' ? 'Quiz' :
								 task.type === 'journal' ? 'Journal' :
								 task.type === 'workout' ? 'Workout' :
								 'Live'}
							</span>
						</div>
						<span className="text-xs font-medium text-[#141B34]">
							{task.count}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default TaskCard;