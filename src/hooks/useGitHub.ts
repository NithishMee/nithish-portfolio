import { useState, useEffect } from 'react';

export interface GitHubData {
  user: {
    name: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
    bio: string;
  } | null;
  repos: Array<{
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
  }>;
  loading: boolean;
  error: string | null;
}

export function useGitHub(username: string) {
  const [data, setData] = useState<GitHubData>({
    user: null,
    repos: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch live GitHub stats');
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        if (isMounted) {
          setData({
            user: userData,
            repos: reposData,
            loading: false,
            error: null
          });
        }
      } catch (err: any) {
        if (isMounted) {
          setData({
            user: {
              name: 'Nithish G',
              avatar_url: '/Nithish_G.png',
              public_repos: 12,
              followers: 18,
              following: 15,
              html_url: `https://github.com/${username}`,
              bio: 'Computer Science Student & Full Stack Developer'
            },
            repos: [
              {
                id: 1,
                name: 'SkinGuardAI',
                description: 'Deep-learning system to classify skin lesions into 7 categories using PyTorch & CNNs.',
                html_url: `https://github.com/${username}/SkinGuardAI`,
                stargazers_count: 12,
                forks_count: 4,
                language: 'Python',
                updated_at: new Date().toISOString()
              },
              {
                id: 2,
                name: 'blood-donation-website',
                description: 'Emergency blood donation connection platform built with React, Node.js & MongoDB.',
                html_url: `https://github.com/${username}/blood-donation-website`,
                stargazers_count: 5,
                forks_count: 2,
                language: 'JavaScript',
                updated_at: new Date().toISOString()
              },
              {
                id: 3,
                name: 'maritime-boundary-alert',
                description: 'IoT-based coastal geofencing & GPS boundary alert system for fishermen.',
                html_url: `https://github.com/${username}/maritime-boundary-alert`,
                stargazers_count: 8,
                forks_count: 3,
                language: 'Python',
                updated_at: new Date().toISOString()
              },
              {
                id: 4,
                name: 'bike-showroom-app',
                description: 'Mobile showroom application with spec comparison & online booking.',
                html_url: `https://github.com/${username}/bike-showroom-app`,
                stargazers_count: 6,
                forks_count: 1,
                language: 'JavaScript',
                updated_at: new Date().toISOString()
              }
            ],
            loading: false,
            error: err.message || 'Offline fallback mode'
          });
        }
      }
    }

    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, [username]);

  return data;
}
