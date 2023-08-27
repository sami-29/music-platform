"use client";
import { IntlErrorCode, NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

function onError(error) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Missing translations are expected and should only log an error
    console.error(error);
  }
}

function getMessageFallback({ namespace, key, error }) {
  const path = [namespace, key].filter((part) => part != null).join(".");

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  } else {
    return `Dear developer, please fix this message: ${path}`;
  }
}

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default function Providers({ locale, messages, children }) {
  return (
    <NextIntlClientProvider
      onError={onError}
      getMessageFallback={getMessageFallback}
      locale={locale}
      messages={messages}
      formats={{
        dateTime: {
          short: {
            day: "numeric",
            month: "short",
            year: "numeric",
          },
        },
        number: {
          precise: {
            maximumFractionDigits: 5,
          },
        },
        list: {
          enumeration: {
            style: "long",
            type: "conjunction",
          },
        },
      }}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
