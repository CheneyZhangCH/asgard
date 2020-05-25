import { React, useState } from '@/common'
import { MarkdownEdit } from '@/components'
import { Node } from 'slate'
import './new.less'

const New: React.FC = () => {
  const [markdownValue, setMarkDownValue] = useState<Node[]>(null)
  const onEdit = (value: Node[]) => {
    setMarkDownValue(value)
  }
  return (
    <div className="page">
      <div className="edit">
        <MarkdownEdit onChange={onEdit} />
      </div>
      <div className="tip">tip</div>
    </div>
  )
}

export default New
