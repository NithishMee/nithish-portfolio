import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { useGitHub } from '../../hooks/useGitHub';
import { personalInfo } from '../../data/personal';
import { SiGithub } from 'react-icons/si';
import { FiStar, FiGitBranch, FiFolder, FiExternalLink, FiInfo } from 'react-icons/fi';

export const GitHubSection: React.FC = () => {
  const { user, repos, loading, error } = useGitHub(personalInfo.githubUsername);

  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live Code Repositories"
          title="GitHub Activity & Open Source"
          subtitle="Real-time synchronized data from GitHub showcasing repository contributions and code stats."
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <div className="w-10 h-10 rounded-full border-4 border-sky-500 border-t-transparent animate-spin" />
            <span className="text-sm text-slate-700 dark:text-slate-300 font-bold">
              Synchronizing GitHub API data...
            </span>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Header User Profile Banner */}
            <GlassCard className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <img
                    src={user?.avatar_url || personalInfo.avatar}
                    alt={user?.name || personalInfo.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-sky-400 shadow-lg"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {user?.name || personalInfo.name}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 font-extrabold border border-sky-500/30">
                        @{personalInfo.githubUsername}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-1 max-w-lg">
                      {user?.bio || 'Computer Science Student & Full Stack Developer'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-6 bg-slate-100 dark:bg-slate-900 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="text-center">
                      <span className="block text-xl font-extrabold text-sky-600 dark:text-sky-400">
                        {user?.public_repos || 12}
                      </span>
                      <span className="text-[10px] text-slate-700 dark:text-slate-300 uppercase font-extrabold">
                        Repos
                      </span>
                    </div>
                    <div className="w-px h-8 bg-slate-300 dark:bg-slate-800" />
                    <div className="text-center">
                      <span className="block text-xl font-extrabold text-purple-600 dark:text-purple-400">
                        {user?.followers || 18}
                      </span>
                      <span className="text-[10px] text-slate-700 dark:text-slate-300 uppercase font-extrabold">
                        Followers
                      </span>
                    </div>
                  </div>

                  <a
                    href={user?.html_url || personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-purple-600 text-white hover:opacity-90 transition-opacity shadow-md"
                    title="Open GitHub Profile"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                  <FiInfo className="w-4 h-4 shrink-0" />
                  <span>Showing cached fallback data. GitHub API status: {error}</span>
                </div>
              )}
            </GlassCard>

            {/* Repositories Cards Grid */}
            <div>
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <FiFolder className="text-sky-500" /> Featured GitHub Repositories
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {repos.map(repo => (
                  <GlassCard key={repo.id} className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <SiGithub className="w-4 h-4 text-sky-500" />
                          <h5 className="font-extrabold text-slate-900 dark:text-white text-base truncate">
                            {repo.name}
                          </h5>
                        </div>
                      </div>

                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium line-clamp-3 mb-4 leading-relaxed">
                        {repo.description || 'Full stack repository built with high engineering standards.'}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-bold">
                        <span className="flex items-center gap-1 font-extrabold">
                          <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                          {repo.language || 'Code'}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiStar className="text-amber-500" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiGitBranch className="text-purple-500" /> {repo.forks_count}
                        </span>
                      </div>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 dark:text-sky-400 font-extrabold hover:underline flex items-center gap-1"
                      >
                        Code <FiExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
