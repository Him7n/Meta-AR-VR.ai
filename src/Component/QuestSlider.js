import React from 'react';

const QuestSlider = () => {
  const quests = [
    {
      id: 1,
      name: 'Attend Virtual Event',
      description: 'Join the AI Ethics webinar on July 15th at 2 PM',
      reward: 'AI Ethics Pioneer NFT',
      type: 'timed',
      datetime: '2023-07-15T14:00:00',
    },
    {
      id: 2,
      name: 'Complete Python Course',
      description: 'Finish all modules of the Advanced Python Programming course',
      reward: 'Python Master NFT',
      type: 'progress',
      progress: 75,
    },
    {
      id: 3,
      name: 'Help a Friend',
      description: 'Assist a fellow student in solving a coding challenge',
      reward: 'Helpful Coder NFT',
      type: 'action',
    },
  ];

  const renderQuest = (quest) => {
    return (
      <div key={quest.id} className="quest-item">
        <h3>{quest.name}</h3>
        <p>{quest.description}</p>
        <p>Reward: {quest.reward}</p>
        {quest.type === 'timed' && (
          <p>Scheduled for: {new Date(quest.datetime).toLocaleString()}</p>
        )}
        {quest.type === 'progress' && (
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{width: `${quest.progress}%`}}
            ></div>
            <span>{quest.progress}%</span>
          </div>
        )}
        {quest.type === 'action' && (
          <button className="action-button">Complete Quest</button>
        )}
      </div>
    );
  };

  return (
    <div className="quest-slider">
      <h2>Available Quests</h2>
      {quests.map(renderQuest)}
    </div>
  );
};

export default QuestSlider;