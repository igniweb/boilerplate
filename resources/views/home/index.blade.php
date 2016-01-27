@extends('layouts.default')

@section('styles')
<link rel="stylesheet" href="/css/app.css">
@stop

@section('content')
<div id="app">
	<greeter></greeter>
	<alert type="error">Something Went Wrong!</alert>
</div>
@stop

@section('scripts')
<script src="/js/main.js"></script>
@stop