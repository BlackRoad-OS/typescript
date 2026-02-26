/**
 * Common TypeScript type definitions for BlackRoad OS
 */

/**
 * BlackRoad organization names in the ecosystem
 */
export type BlackRoadOrganization =
  | 'BlackRoad-OS'
  | 'BlackRoad-AI'
  | 'BlackRoad-Cloud'
  | 'BlackRoad-Security'
  | 'BlackRoad-Media'
  | 'BlackRoad-Foundation'
  | 'BlackRoad-Interactive'
  | 'BlackRoad-Labs'
  | 'BlackRoad-Hardware'
  | 'BlackRoad-Studio'
  | 'BlackRoad-Ventures'
  | 'BlackRoad-Education'
  | 'BlackRoad-Gov'
  | 'Blackbox-Enterprises'
  | 'BlackRoad-Archive';

/**
 * Configuration for connecting to BlackRoad ecosystem services
 */
export interface BlackRoadConfig {
  /**
   * GitHub organization
   */
  organization: BlackRoadOrganization;
  
  /**
   * Repository name
   */
  repository?: string;
  
  /**
   * API endpoint (optional)
   */
  apiEndpoint?: string;
  
  /**
   * Authentication token (optional)
   */
  authToken?: string;
}

/**
 * Standard response format for BlackRoad services
 */
export interface BlackRoadResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

/**
 * Repository metadata from BlackRoad ecosystem
 */
export interface RepositoryMetadata {
  name: string;
  fullName: string;
  description?: string;
  organization: BlackRoadOrganization;
  language?: string;
  topics?: string[];
  url: string;
}
