// page.tsx
import { Builder, BuilderComponent } from '@builder.io/react'

// IMPORTANT: import the file that you call Builder.registerComponent
// anywhere you have <BuilderComponent />
Builder.registerComponent(
  dynamic(() => import('./components/heading')),
  {
    name: 'Heading',
    inputs: [{ name: 'title', type: 'text' }],
    image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a'
  }
)

export default function Page() {
  return <BuilderComponent ... />
}
