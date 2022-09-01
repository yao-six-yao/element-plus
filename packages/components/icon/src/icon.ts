import { buildProps, definePropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type Icon from './icon.vue'

export const iconProps = buildProps({
  size: {
    type: definePropType<number | string>([Number, String]),
  },
  color: {
    type: String,
  },
} as const)

export const iconEmits = {
  click: (ev: Event) => ev instanceof Event,
}

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconEmits = typeof iconEmits
export type IconInstance = InstanceType<typeof Icon>
