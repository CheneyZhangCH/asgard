import { React, useState } from '@/common'
import { MarkdownEdit } from '@/components'
import './new.less'

const New: React.FC = () => {
  const [markdownValue, setMarkDownValue] = useState('')
  return (
    <div className="page">
      <div className="preview">preview</div>
      <div className="edit">
        <MarkdownEdit onChange={(value: string) => setMarkDownValue(value)} />
      </div>
      <div className="tip">tip</div>
    </div>
  )
}

export default New
