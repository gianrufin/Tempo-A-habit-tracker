import React from 'react';
import { Search, Settings, Flame, Zap, FileText, Download } from 'lucide-react';
import { UserPreferences } from '../types';

interface TopBarProps {
  userPrefs: UserPreferences;
  selectedDate: string; // YYYY-MM-DD
  activeHabitCount: number;
  completedTodayCount: number;
  onOpenSearch: () => void;
  onOpenSettings: () => void;
  onOpenReadme?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  userPrefs,
  selectedDate,
  activeHabitCount,
  completedTodayCount,
  onOpenSearch,
  onOpenSettings,
  onOpenReadme,
}) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const formattedDate = new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const progressPercent = activeHabitCount > 0 ? Math.round((completedTodayCount / activeHabitCount) * 100) : 0;

  return (
    <header className="w-full pt-4 pb-3 px-4 sm:px-6 flex items-center justify-between border-b border-white/5 bg-[#0b0714]/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-purple-500 to-amber-400 p-[1.5px] flex items-center justify-center shadow-md shadow-purple-900/30">
          <div className="w-full h-full bg-[#0e081c] rounded-[14px] flex items-center justify-center">
            <Zap className="w-5 h-5 text-amber-400 fill-amber-400/20" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              {getGreeting()},{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-purple-300 bg-clip-text text-transparent">
                {userPrefs.displayName || 'Friend'}
              </span>
            </h1>
          </div>
          <p className="text-xs text-zinc-400">{formattedDate}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Daily progress pill */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18112b] border border-purple-500/20 text-xs text-zinc-300">
          <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
          <span>
            {completedTodayCount}/{activeHabitCount} done ({progressPercent}%)
          </span>
        </div>

        {/* Readme & Direct APK Download */}
        {onOpenReadme && (
          <button
            id="topbar-readme-btn"
            onClick={onOpenReadme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-900/80 to-amber-900/60 hover:from-purple-800 hover:to-amber-800 text-amber-300 hover:text-amber-200 border border-amber-500/30 text-xs font-semibold shadow-sm transition-all"
            title="Read README & Download APK"
            aria-label="README & Download APK"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">APK & README</span>
          </button>
        )}

        {/* Search button */}
        <button
          id="topbar-search-btn"
          onClick={onOpenSearch}
          className="p-2.5 rounded-full bg-[#18112b] hover:bg-[#251b42] text-zinc-300 hover:text-white border border-purple-500/10 transition-colors"
          title="Search habits and tasks"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Settings button */}
        <button
          id="topbar-settings-btn"
          onClick={onOpenSettings}
          className="p-2.5 rounded-full bg-[#18112b] hover:bg-[#251b42] text-zinc-300 hover:text-white border border-purple-500/10 transition-colors"
          title="Settings"
          aria-label="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
