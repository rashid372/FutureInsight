import {mount as dashboardMount} from 'dashboard/DashboardIndex';
import {mount as questionMount} from  'question/QuestionIndex';
import {mount as resourceMount} from  'resource/ResourceIndex';
import {mount as testMount} from 'test/TestIndex';

dashboardMount(document.querySelector('#dashboard-module'));
questionMount(document.querySelector('#question-module'));
resourceMount(document.querySelector('#resource-module'));
testMount(document.querySelector('#test-module'));