import vscode from 'vscode'

export function getSourcegraphUrl(): string {
    // has default value
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const url = vscode.workspace.getConfiguration('sourcegraph').get<string>('url')!
    if (url.endsWith('/')) {
        return url.slice(0, -1)
    }
    return url
}

export function getRemoteUrlReplacements(): Record<string, string> {
    // has default value
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const replacements = vscode.workspace
        .getConfiguration('sourcegraph')
        .get<Record<string, string>>('remoteUrlReplacements')!
    return replacements
}

export function getDefaultRemote(): string | undefined {
    // has default value
    return vscode.workspace.getConfiguration('sourcegraph').get<string>('defaultRemote')
}
