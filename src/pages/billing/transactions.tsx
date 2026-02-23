import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const mockTransactions = [
  { id: '1', date: 'Feb 20, 2025', description: 'Starter plan', amount: '$0' },
]

export function TransactionHistoryPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Transaction history</h1>
          <p className="text-muted-foreground">Invoices and payments.</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/dashboard/billing">Billing</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-sm text-muted-foreground">
                  <th className="pb-2 font-medium">Date</th>
                  <th className="pb-2 font-medium">Description</th>
                  <th className="pb-2 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((t) => (
                  <tr key={t.id} className="border-b border-border">
                    <td className="py-3 text-sm">{t.date}</td>
                    <td className="py-3 text-sm">{t.description}</td>
                    <td className="py-3 text-right text-sm">{t.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
