class LabelStore{
  async fetchLabels() {
    const response = await fetch('/data-sources/issues.json')
    const data = await response.json()
    this.labels = data
  }
}