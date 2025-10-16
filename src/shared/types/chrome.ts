// Chrome Extension specific types
export interface ChromeExtensionContext {
  type: 'background' | 'content' | 'popup' | 'options' | 'sidepanel';
  tabId?: number;
  frameId?: number;
}

export interface ExtensionMessage<T = any> {
  type: string;
  payload: T;
  timestamp: number;
  requestId: string;
  sender: ChromeExtensionContext['type'];
}

export interface ExtensionResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  requestId: string;
}

// Chrome API wrappers
export interface ChromeStorageOptions {
  ttl?: number;
  encrypt?: boolean;
}

export interface ChromeTabInfo {
  id: number;
  url: string;
  title: string;
  active: boolean;
  windowId: number;
}
