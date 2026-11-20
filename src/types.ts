/**
 * Identifies which internal native-bridge operation produced an error passed
 * to {@link SessionTimeoutConfig.onError}.
 */
export type SessionTimeoutErrorSource =
  | 'poll'
  | 'start'
  | 'reset'
  | 'pause'
  | 'resume'
  | 'stop';

export interface SessionTimeoutConfig {
  timeout: number;
  warningDuration?: number;
  onTimeout: () => void;
  onWarning?: (remainingTime: number) => void;
  enabled?: boolean;
  pauseOnBackground?: boolean;
  /**
   * Called when a native timer operation fails. When provided it replaces the
   * default `console.error` logging, letting the host app report or recover
   * from native-bridge failures.
   */
  onError?: (error: unknown, source: SessionTimeoutErrorSource) => void;
}

export interface SessionTimeoutState {
  isWarning: boolean;
  remainingTime: number;
  isActive: boolean;
}

export interface SessionTimeoutControls {
  resetTimer: () => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
}

export type SessionTimeoutContextValue = SessionTimeoutState &
  SessionTimeoutControls;
