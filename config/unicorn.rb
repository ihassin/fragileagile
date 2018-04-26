working_directory '/home/pi/fragileagile/current'
pid '/home/pi/fragileagile/current/tmp/pids/unicorn.pid'
stderr_path '/home/pi/fragileagile/current/log/unicorn.log'
stdout_path '/home/pi/fragileagile/current/log/unicorn.log'

listen '/tmp/unicorn.fragileagile.sock', :backlog => 64
worker_processes 2
timeout 30
