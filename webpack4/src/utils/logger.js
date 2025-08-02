/**
 * 日志级别枚举
 */
const LogLevel = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

/**
 * 日志级别名称映射
 */
const LogLevelNames = {
  [LogLevel.DEBUG]: 'DEBUG',
  [LogLevel.INFO]: 'INFO',
  [LogLevel.WARN]: 'WARN',
  [LogLevel.ERROR]: 'ERROR'
};

/**
 * 日志级别颜色映射
 */
const LogLevelColors = {
  [LogLevel.DEBUG]: '#6c757d',
  [LogLevel.INFO]: '#17a2b8',
  [LogLevel.WARN]: '#ffc107',
  [LogLevel.ERROR]: '#dc3545'
};

/**
 * 创建日志记录器
 * @param {string} name - 日志记录器名称
 * @param {number} level - 日志级别
 * @returns {Object} 日志记录器对象
 */
export function createLogger(name, level = LogLevel.INFO) {
  const formatMessage = (level, message, data) => {
    const timestamp = new Date().toISOString();
    const levelName = LogLevelNames[level];
    const color = LogLevelColors[level];
    
    const baseMessage = `%c[${timestamp}] ${levelName} [${name}] ${message}`;
    const style = `color: ${color}; font-weight: bold;`;
    
    if (data) {
      console.log(baseMessage, style, data);
    } else {
      console.log(baseMessage, style);
    }
  };

  return {
    debug: (message, data) => {
      if (level <= LogLevel.DEBUG) {
        formatMessage(LogLevel.DEBUG, message, data);
      }
    },
    
    info: (message, data) => {
      if (level <= LogLevel.INFO) {
        formatMessage(LogLevel.INFO, message, data);
      }
    },
    
    warn: (message, data) => {
      if (level <= LogLevel.WARN) {
        formatMessage(LogLevel.WARN, message, data);
      }
    },
    
    error: (message, data) => {
      if (level <= LogLevel.ERROR) {
        formatMessage(LogLevel.ERROR, message, data);
      }
    },
    
    setLevel: (newLevel) => {
      level = newLevel;
    }
  };
}

/**
 * 全局日志记录器
 */
export const globalLogger = createLogger('Global');

/**
 * 性能监控日志记录器
 */
export const performanceLogger = createLogger('Performance');

/**
 * 网络请求日志记录器
 */
export const networkLogger = createLogger('Network'); 