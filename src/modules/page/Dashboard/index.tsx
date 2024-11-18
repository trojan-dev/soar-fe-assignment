import Cards from "../../shared/Cards";
import RecentTransactions from "../../shared/RecentTransactions/RecentTransactions";
import QuickTransfer from "../../shared/QuickTransfer/QuickTransfer";
import WeeklyActivity from "../../shared/WeeklyActivity/WeeklyActivity";
import ExpenseStatistics from "../../shared/ExpenseStatistics/ExpenseStatistics";
import BalanceHistory from "../../shared/BalanceHistory/BalanceHistory";
export default function DashboardPage() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row gap-5 mb-5">
        <article className="flex-1 lg:flex-[0.7]">
          <Cards />
        </article>
        <article className="flex-1 lg:flex-[0.3]">
          <RecentTransactions />
        </article>
      </section>
      <section className="flex flex-col lg:flex-row gap-5 mb-5">
        <article className="flex-1 lg:flex-[0.7]">
          <WeeklyActivity />
        </article>
        <article className="flex-1 lg:flex-[0.3]">
          <ExpenseStatistics />
        </article>
      </section>
      <section className="flex flex-col lg:flex-row items-baseline gap-5">
        <article className="flex-1 lg:flex-[0.4]">
          <QuickTransfer />
        </article>
        <article className="flex-1 lg:flex-[0.6]">
          <BalanceHistory />
        </article>
      </section>
    </div>
  );
}
