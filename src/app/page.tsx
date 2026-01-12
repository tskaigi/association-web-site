export default function Home() {
  const members = [
    { title: "代表理事", name: "竹下義晃" },
    { title: "理事", name: "清水俊博" },
    { title: "理事", name: "丹羽健" },
    { title: "理事", name: "塩原大介" },
    { title: "理事", name: "緑川達也" },
  ];

  const conferences = [
    { category: "東京", name: "TSKaigi 2024", url: "https://2024.tskaigi.org" },
    { category: "東京", name: "TSKaigi 2025", url: "https://2025.tskaigi.org" },
    { category: "東京", name: "TSKaigi 2026", url: "https://2026.tskaigi.org"},
    {
      category: "関西",
      name: "TSKaigi Kansai 2024",
      url: "https://kansai.tskaigi.org",
    },
    {
      category: "北陸",
      name: "TSKaigi Hokuriku 2025",
      url: "https://hokuriku.tskaigi.org/",
    },
  ];
  const reports = [
    {
      title: "第一期(2023/12~2024/9)",
      financialReportUrl:
        "./2024/TSKaigiAssociation_financial_report_1st_period.pdf",
      businessReportUrl:
        "./2024/tskaigiassociation_business_report_1st_period.pdf",
    },
    {
      title: "第二期(2024/10~2025/9)",
      financialReportUrl:
        "./2024/TSKaigiAssociation_financial_report_2nd_period.pdf",
      businessReportUrl:
        "./2024/tskaigiassociation_business_report_2nd_period.pdf",
    },
  ];

  const groupByCategory = conferences.reduce((acc, conference) => {
    acc.set(conference.category, [
      ...(acc.get(conference.category) || []),
      conference,
    ]);
    return acc;
  }, new Map<string, typeof conferences>());
  return (
    <main className="flex min-h-screen flex-col items-left">
      <div className="flex flex-col bg-brand p-5 rounded-b-md">
        <h1 className="text-4xl font-bold mb-4 text-white">
          一般社団法人TSKaigi Association
        </h1>
        <p className="text-2xl text-gray-200 dark:text-gray-300">
          TSKaigiの運営を行う団体です。
        </p>
      </div>
      <div className="p-5 flex flex-col">
        <div className="flex flex-col mb-5">
          <h1 className="text-2xl font-bold">開催カンファレンス</h1>
          <div className="mt-3">
            {Array.from(groupByCategory.entries()).map(
              ([category, conferences]) => (
                <div key={category}>
                  <h2 className="text-xl font-bold">{category}</h2>
                  <ul className="list-none p-1">
                    {conferences.map((conference, index) => (
                      <li key={index}>
                        <a
                          href={conference.url}
                          className="text-blue-600 text-xl"
                        >
                          {conference.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <h1 className="text-2xl font-bold">メンバー</h1>
          <table className="mt-3 w-64">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left border-black">
                  役職
                </th>
                <th className="border px-4 py-2 text-left border-black">
                  氏名
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 border-black">
                    {member.title}
                  </td>
                  <td className="border px-4 py-2 border-black">
                    {member.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col mb-5">
          <h1 className="text-2xl font-bold">お問い合わせ</h1>
          <p className="text-xl p-1">
            イベントへのお問い合わせは、各イベント別のお問い合わせ窓口までお願いします。
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">決算報告</h1>
          <ul className="list-disc list-inside text-xl p-1">
            {reports.map((report, index) => (
              <li key={index}>
                {report.title}{" "}
                <a href={report.financialReportUrl} className="text-blue-600">
                  決算報告書
                </a>
                &nbsp;
                <a href={report.businessReportUrl} className="text-blue-600">
                  事業報告書
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="bg-brand p-3">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">
            © 2024 TSKaigi Association. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                about
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
