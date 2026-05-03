import { useEffect } from 'react'
import { useQRStore } from '@/store/qrStore'
import Layout from '@/components/Layout'
import QRGenerator from '@/components/QRGenerator'

export default function App() {
  const { loadState } = useQRStore()

  useEffect(() => {
    loadState() // Restore saved state on mount
  }, [])

  return (
    <Layout>
      <QRGenerator />
    </Layout>
  )
}
