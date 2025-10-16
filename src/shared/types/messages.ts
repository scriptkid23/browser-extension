// Message Bus Types
export type MessageType =
  // Settings
  | 'settings:get'
  | 'settings:update'
  | 'settings:delete'
  | 'settings:changed'
  
  // Page Analysis
  | 'page:analyze'
  | 'page:scrape'
  | 'page:highlight'
  
  // Storage
  | 'storage:save'
  | 'storage:load'
  | 'storage:clear'
  
  // System
  | 'system:error'
  | 'system:ready';

export interface MessagePayloadMap {
  'settings:get': { userId: string };
  'settings:update': { userId: string; theme?: string; language?: string; notifications?: boolean };
  'settings:delete': { userId: string };
  'settings:changed': { settings: any };
  
  'page:analyze': { url: string };
  'page:scrape': { selectors: string[] };
  'page:highlight': { text: string };
  
  'storage:save': { key: string; value: any };
  'storage:load': { key: string };
  'storage:clear': {};
  
  'system:error': { message: string; stack?: string };
  'system:ready': {};
}

export interface Message<T extends MessageType = MessageType> {
  type: T;
  payload: MessagePayloadMap[T];
  timestamp: number;
  requestId: string;
  sender: 'background' | 'content' | 'popup' | 'options' | 'sidepanel';
}
