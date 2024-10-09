// src/Component/SessionList.js
import React from "react";
import { useAtom } from "jotai";
import { charactersAtom } from "../Socketmanager";

const SessionList = () => {
  const [characters] = useAtom(charactersAtom);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Session Participants ({characters.length})
      </h2>
      <ul className="divide-y divide-gray-200 bg-white/60 shadow rounded-lg">
        {characters.map((character) => (
          <li key={character.id} className="py-3 px-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-xs text-gray-700">{character.id}</span>
                <span className="font-xs text-gray-500 ml-2">
                  {character.role === 'presenter' ? 'Presenter' : 'Presentee'}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;