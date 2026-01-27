import type { BlackRoadConfig, BlackRoadResponse, RepositoryMetadata } from '../types';

/**
 * Utility functions for BlackRoad ecosystem integration
 */

/**
 * Creates a standardized response object
 */
export function createResponse<T>(
  success: boolean,
  data?: T,
  error?: string
): BlackRoadResponse<T> {
  return {
    success,
    data,
    error,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Validates BlackRoad configuration
 */
export function validateConfig(config: BlackRoadConfig): boolean {
  if (!config.organization) {
    throw new Error('Organization is required in BlackRoad config');
  }
  return true;
}

/**
 * Constructs GitHub API URL for a repository
 */
export function getRepositoryUrl(config: BlackRoadConfig): string {
  const { organization, repository } = config;
  
  if (!repository) {
    return `https://api.github.com/orgs/${organization}`;
  }
  
  return `https://api.github.com/repos/${organization}/${repository}`;
}

/**
 * Constructs GitHub web URL for a repository
 */
export function getRepositoryWebUrl(config: BlackRoadConfig): string {
  const { organization, repository } = config;
  
  if (!repository) {
    return `https://github.com/${organization}`;
  }
  
  return `https://github.com/${organization}/${repository}`;
}

/**
 * Formats repository metadata for display
 */
export function formatRepositoryMetadata(metadata: RepositoryMetadata): string {
  const parts = [
    `📦 ${metadata.fullName}`,
    metadata.description ? `📝 ${metadata.description}` : null,
    metadata.language ? `💻 ${metadata.language}` : null,
    `🔗 ${metadata.url}`,
  ].filter(Boolean);

  return parts.join('\n');
}

/**
 * Delays execution for specified milliseconds
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Safely parses JSON with error handling
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
}
