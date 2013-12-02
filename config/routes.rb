CapybaraApp::Application.routes.draw do
  root to: 'welcome#index'
  get '/javascript' => 'welcome#script'
  get '/quizzes' => 'welcome#quizzes'
end
