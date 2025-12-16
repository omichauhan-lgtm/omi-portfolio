import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

interface State {
    hasError: boolean
    error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-red-900/90 text-white p-8">
                    <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
                    <pre className="bg-black/50 p-4 rounded overflow-auto max-w-2xl">
                        {this.state.error?.message}
                    </pre>
                    <button
                        className="mt-8 px-6 py-3 bg-white text-red-900 font-bold rounded hover:bg-gray-200"
                        onClick={() => window.location.reload()}
                    >
                        Reload Integration
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}
