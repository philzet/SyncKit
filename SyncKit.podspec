#
# Be sure to run `pod lib lint PZSyncKit.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see http://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'PZSyncKit'
 s.version          = '1.3.0'
  s.summary          = 'CloudKit synchronization for your Core Data or Realm model.'

  s.description      = <<-DESC
PZSyncKit automates the process of synchronizing your Core Data/Realm models using CloudKit. It can easily be plugged into (and removed from) your existing stack.
                       DESC

  s.homepage         = 'https://github.com/mentrena/PZSyncKit'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'Manuel Entrena' => 'manuel@mentrena.com' }
  s.source           = { :git => 'https://github.com/mentrena/PZSyncKit.git', :tag => s.version.to_s }
  s.swift_version    = '5.0'
  s.module_name		 = 'PZSyncKit'

s.ios.deployment_target = '10.0'
s.osx.deployment_target = '10.12'
s.watchos.deployment_target = '3.0'

s.default_subspec = 'Core'

s.subspec 'Core' do |cs|
	cs.source_files = 'PZSyncKit/Classes/QSSynchronizer/*.swift', 'PZSyncKit/Classes/QSSynchronizer/Operations/*.swift'
	cs.frameworks = 'CloudKit'
end

s.subspec 'CoreData' do |cs|
	cs.dependency 'PZSyncKit/Core'
	cs.source_files = 'PZSyncKit/Classes/CoreData/*.swift'
	cs.preserve_paths = 'PZSyncKit/Classes/CoreData/*.xcdatamodeld'
	cs.resources = 'PZSyncKit/Classes/CoreData/*.xcdatamodeld'
	cs.frameworks = 'CoreData'
end
	
s.subspec 'Realm' do |cs|
	cs.dependency 'PZSyncKit/Core'
	cs.dependency 'Realm', '~> 10.5'
	cs.source_files = 'PZSyncKit/Classes/Realm/*.swift'
end

s.subspec 'RealmSwift' do |cs|
	cs.dependency 'PZSyncKit/Core'
	cs.dependency 'Realm', '~> 10.5'
	cs.dependency 'RealmSwift', '~> 10.5'
	cs.source_files = 'PZSyncKit/Classes/RealmSwift/*.swift'
end

end
