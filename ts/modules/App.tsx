import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON, createFunctionComponent } from '@polymita/renderer';

export const name = 'App' as const
export const namespace = 'App' as const
export let meta: {
  props: AppProps,
  layoutStruct: AppLayout
  patchCommands: []
}

export interface AppProps {
}

export const propTypes = {
}

export const logic = (props: SignalProps<AppProps>) => {
  return {
  }
}
type LogicReturn = ReturnType<typeof logic>

export type AppLayout = {
  type: 'appContainer',
  children: [
  ]
}

export const layout = (props: AppProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  return (
    <appContainer className='flex h-screen w-screen'>
      app
    </appContainer>
  )
}

export const styleRules = (props: AppProps, layout: ConvertToLayoutTreeDraft<AppLayout>) => {
  return [
  ]
}

export const designPattern = (props: AppProps, layout: ConvertToLayoutTreeDraft<AppLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
