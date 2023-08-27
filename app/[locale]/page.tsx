"use client";

import { useTranslations } from "next-intl";
import { CustomCollapsible } from "./components/CustomCollapsible";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
      <CustomCollapsible />
    </>
  );
}
