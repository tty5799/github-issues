import { pipe, renderTemplate, shareToChild } from "../utils.js";
import { statusTab } from "../statusTab.js";
import { issueList } from "../issueList.js";
import { getIssueTpl } from "../tpl.js";

const renderIssueTemplate = renderTemplate('#app');

const fetchIssues = async () => {
  return await fetch('/data-sources/issues.json').then((response) => response.json());
};

export const issue = () => {
  let issueStatus = 'open';

  const setStatus = (newStatus) => {
    issueStatus = newStatus;
    pipe(fetchIssues, renderChild(newStatus))();
  };

  const onClickStatusTab = (newStatus) => {
    setStatus(newStatus);
  };

  const renderChild = (status) => {
    return (fetchIssues) => {
      shareToChild(statusTab({ status, onClickStatusTab }), issueList({ status }))(fetchIssues);
    };
  };

  pipe(getIssueTpl, renderIssueTemplate, fetchIssues, renderChild(issueStatus))();
}